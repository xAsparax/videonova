import React from "react"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import PropTypes from "prop-types"
import { reducer as userReducer } from "../store/modules/user"
import { reducer as siteInfoReducer } from "../store/modules/siteInfo"
import { reducer as usersListReducer } from "../store/modules/usersList"
import { reducer as videosListReducer } from "../store/modules/video"

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoReducer,
    user: userReducer,
    users: usersListReducer,
    videos: videosListReducer,
  },
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
