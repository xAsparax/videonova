/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

const videoFormSlice = createSlice({
  initialState: {
    isVideoForm: false,
    show: false,
    url: null,
    title: null,
    description: null,
    loading: false,
    error: null,
    success: false,
  },
  name: "videoForm",
  reducers: {
    show(state) {
      state.isVideoForm = true
      state.show = true
      state.error = null
    },
    hide(state) {
      state.show = false
      state.error = null
    },
    showLoading(state) {
      state.loading = true
      state.isVideoForm = false
      state.error = null
    },
    hideLoading(state) {
      state.loading = false
    },
    formErr(state, action) {
      state.error = action.payload.error
    },
    showSuccess(state) {
      state.loading = false
      state.isVideoForm = false
      state.error = null
    },
    update(state, action) {
      state.url = action.payload.url
      state.title = action.payload.title
      state.description = action.payload.description
    },
  },
})

const { reducer } = videoFormSlice
const { show, hide, showLoading, hideLoading, formErr, showSuccess, update } =
  videoFormSlice.actions

export {
  reducer,
  show,
  hide,
  showLoading,
  hideLoading,
  formErr,
  showSuccess,
  update,
}
