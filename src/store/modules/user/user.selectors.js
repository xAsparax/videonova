import { createSelector } from "@reduxjs/toolkit"

export const rootSelector = (state) => state.user
// {
//   "id": "aa38a317e1e227794e9947a30e8de6f2",
//   "slug": "vitalii_hrozynskyi",
//   "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//   "userName": "Vitalii Hrozynskyi",
//   "token": "c3cad1232910274cab638376b7923212"
// }
export const selectAuthorized = createSelector(
  rootSelector,
  ({ authorized }) => authorized
)

export const selectUserId = createSelector(
  rootSelector,
  ({ userInfo }) => userInfo && userInfo['id']
)

export const selectUserName = createSelector(
  rootSelector,
  ({ userInfo }) => userInfo && userInfo['userName']
)

export const selectUserImage = createSelector(
  rootSelector,
  ({ userInfo }) => userInfo && userInfo.userPic
)

export const selectUserToken = createSelector(
  rootSelector,
  ({userInfo}) => userInfo && userInfo.authToken
)

export const selectUserError = createSelector(
  rootSelector,
  ({ error }) => error
)

/*
{
  type: "user/login", payload: {id: 15, userName: "Name", userPic: "https://miro.medium.com/fit/c/110/110/0*VgPrBiG69JilnR9H"}
}
*/
