import React from "react"
import {
  configureStore,
  createListenerMiddleware,
} from "@reduxjs/toolkit"
import {Provider} from "react-redux"
import PropTypes from "prop-types"
import {reducer as userReducer, authorize, selectUserToken} from "../store/modules/user"
import { reducer as siteInfoReducer } from "../store/modules/siteInfo"
import { reducer as usersListReducer, load as loadUsers } from "../store/modules/usersList"
import { reducer as videosListReducer, load as loadVideos} from "../store/modules/video"
import { reducer as formsReducer, selectFormData, selectIsSignUp } from "../store/modules/forms"
import {reducer as videoFormReducer, selectIsVideoForm, selectVideoFormData, update as uploadVideo} from "../store/modules/videoForm"
import {hideForm} from "../components/partials/signFormTemplate/signFormTemplate"
import {action} from "@storybook/addon-actions";

const authListener = createListenerMiddleware()

authListener.startListening({
  actionCreator: authorize,
  effect: async (action, listenerApi) => {
    try {
      const state = listenerApi.getState()
      const formData = selectFormData(state)
      const isSignUp = selectIsSignUp(state)
      if (!formData.password || (!formData.repeatPassword && isSignUp) || !formData.username) {
        listenerApi.dispatch({type: "user/authFailure", payload: {error: "All fields are mandatory."}})
        return
      }
      if ((formData.password !== formData.repeatPassword) && isSignUp) {
        listenerApi.dispatch({type: "user/authFailure", payload: {error: "Password and password confirmation doesn't match."}})
        return
      }
      listenerApi.dispatch({type: "siteInfo/showLoading"})
      const apiLink = isSignUp ? "https://wonderful-app-lmk4d.cloud.serverless.com/register" :
        "https://wonderful-app-lmk4d.cloud.serverless.com/auth"
      const response = await fetch(apiLink,
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
      const user_info = await response.json()
      listenerApi.dispatch({type: "siteInfo/hideLoading"})
      if (user_info.type === "exists") {
        listenerApi.dispatch({type: "user/authFailure", payload: {error: "User already exists"}})
      } else if (response.status === 404) {
        listenerApi.dispatch({type: "user/authFailure", payload: {error: user_info.message}})
      } else {
        listenerApi.dispatch({type: 'user/authSuccess', payload: user_info})
        listenerApi.dispatch({type: 'users/add', payload: [user_info]})
        listenerApi.dispatch(hideForm())
      }
    } catch (e) {
      listenerApi.dispatch({type: "user/authFailure", payload: {error: `Exception ${e}`}})
    }
  }
})

const userListener = createListenerMiddleware()
userListener.startListening({
  actionCreator: loadUsers,
  effect: async (action, listenerApi) => {
    const apiLink = "https://wonderful-app-lmk4d.cloud.serverless.com/user"
    try {
      const response = await fetch(apiLink, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
      const users = await response.json()
      if (users) {
        listenerApi.dispatch({type: "users/add", payload: users})
      }
    } catch (e) {
    }
  }
})

const videoListener = createListenerMiddleware()
videoListener.startListening ({
  actionCreator: loadVideos,
  effect: async (action, listenerApi) => {
    const apiLink = "https://wonderful-app-lmk4d.cloud.serverless.com/video"
    try {
      const response = await fetch(apiLink, {
        method: "GET",
        headers: {
          "Accept": "application/json"
        }
      })
      const videos = await response.json()
      if (videos) {
        listenerApi.dispatch({type: "videos/add", payload: videos})
      }
    } catch (e) {
    }
  }
})

const addVideoListener = createListenerMiddleware()
addVideoListener.startListening ({
  actionCreator: uploadVideo,
  effect: async (action, listenerApi ) => {
    try {
      const state = listenerApi.getState()
      const videoFormData = selectVideoFormData(state)
      const isVideoForm = selectIsVideoForm(state)
      const userToken = selectUserToken(state)
      if (isVideoForm && (!videoFormData.url || !videoFormData.title || !videoFormData.description)) {
        listenerApi.dispatch({type: "videoForm/formErr", payload: {error: "All fields are mandatory."}})
        return
      }
      listenerApi.dispatch({type: "videoForm/showLoading"})
      const apiLink = "https://wonderful-app-lmk4d.cloud.serverless.com/video"
      const response = await fetch(apiLink, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
          'Authorization': userToken
        },
        body: JSON.stringify(videoFormData)
      })
      const videoInfo = await response.json()
      // if (response.status === 403) {
      //   listenerApi.dispatch({type: "videoForm/formErr", payload: {error: "Loading Failed"}})
      // }
      if (videoInfo) {
        listenerApi.dispatch({type: 'videoForm/showSuccess'})
        listenerApi.dispatch({type: "videos/add", payload: videos})
      }
    } catch (e) {
    }
  }
})

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoReducer,
    user: userReducer,
    users: usersListReducer,
    videos: videosListReducer,
    forms: formsReducer,
    videoForm: videoFormReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(authListener.middleware, userListener.middleware,
    videoListener.middleware, addVideoListener.middleware),
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content inside block could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
