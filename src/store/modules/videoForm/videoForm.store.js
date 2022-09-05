import {createSlice} from "@reduxjs/toolkit"

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
    show(state, action) {
      state.isVideoForm = true
      state.show = true
    },
    hide(state) {
      state.show = false
    },
    showLoading(state) {
      state.loading = true
      state.isVideoForm = false
    },
    hideLoading(state) {
      state.loading = false
    },
    formErr(state) {

    },
    showSuccess(state) {
      state.loading = false
      state.isVideoForm = false
    },
    update(state, action) {
      state.url = action.payload.url
      state.title = action.payload.title
      state.description = action.payload.description
    }
  },
})

const reducer = videoFormSlice.reducer
const { show, hide, showLoading, hideLoading, formErr, showSuccess, update } = videoFormSlice.actions

export { reducer, show, hide, showLoading, hideLoading, formErr, showSuccess, update }
