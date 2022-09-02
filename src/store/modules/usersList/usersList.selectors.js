import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.users
// [
//   {
//     "id": "aa38a317e1e227794e9947a30e8de6f2",
//     "slug": "vitalii_hrozynskyi",
//     "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//     "userName": "Vitalii Hrozynskyi"
//   }
// ]
//

export const selectUsers = createSelector(
  rootSelector,
  (state) => Object.values (state)
)

export const selectUserByID = (id) => createSelector(
  rootSelector,
  (state) => state[id]
)
