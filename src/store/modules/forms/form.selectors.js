import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.forms

export const selectIsSignUp = createSelector(
  rootSelector,
  ({ isSignUp }) => isSignUp
)

export const selectShow = createSelector(rootSelector, ({ show }) => show)

export const selectFormData = createSelector(
  rootSelector,
  ({ isSignUp, username, password, passwordCheck }) => {
    const data = { username, password }
    if (isSignUp) data.passwordCheck = passwordCheck
    return data
  }
)
