import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.videoForm

export const selectIsVideoForm = createSelector(
  rootSelector,
  ({ isVideoForm }) => isVideoForm
)

export const selectShow = createSelector(
  rootSelector,
  ({ show }) => show
)

export const selectVideoLoading = createSelector(
  [rootSelector],
  ({ loading }) => loading
)

export const selectLoadSuccess = createSelector(
  rootSelector,
  ({ success }) => success
)

export const selectError = createSelector(
  [rootSelector],
  ({ error }) => error
)

export const selectVideoFormData = createSelector(
  rootSelector,
  ({ isVideoForm, url, title, description}) => {
    const data = {url: url, title: title, description: description}
    return isVideoForm && data
  }
)
