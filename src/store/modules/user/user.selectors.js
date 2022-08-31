export const rootSelector = (state) => state

export const selectAuthorized = (state) => state.user.authorized

export const selectUserId = (state) => state.user.authorized && state.user.userInfo.userId

export const selectUserName = (state) => state.user.authorized && state.user.userInfo.userName

export const selectUserImage = (state) => state.user.authorized && state.user.userInfo.userImage
