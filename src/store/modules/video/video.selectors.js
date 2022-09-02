import { createSelector } from "@reduxjs/toolkit"
// [
//   {
//     "url": "https://www.youtube.com/watch?v=JCOJS1wWmeo",
//     "title": "Музика для праці",
//     "description": "Нереально крутий трек, коли починаєш під нього працювати, то все ніби саме складається і виходить.",
//     "id": "string",
//     "userId": "string"
//   }
// ]
export const rootSelector = (state) => state.videos

export const selectVideos = createSelector(
  rootSelector,
  (state) => Object.values (state)
)

export const selectVideoByUserID = (userId) => createSelector(
  rootSelector,
  (state) => state[userId] || []
)
