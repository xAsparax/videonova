import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.user

export const selectSiteIntro = createSelector(
  [rootSelector],
  ({ siteIntro }) => siteIntro
)

export const selectFooterText = createSelector(
  [rootSelector],
  ({ footerText }) => footerText
)

export const selectSocial = createSelector(
  [rootSelector],
  ({ social }) => social
)
