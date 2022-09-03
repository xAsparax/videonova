import {createSlice} from "@reduxjs/toolkit"

// {
//   "id": "aa38a317e1e227794e9947a30e8de6f2",
//   "slug": "vitalii_hrozynskyi",
//   "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//   "userName": "Vitalii Hrozynskyi",
//   "token": "c3cad1232910274cab638376b7923212"
// }

const userSlice = createSlice({
  initialState: {
    authorized: false,
    error: null,
    userInfo: null
  },
  name: "user",
  reducers: {
    authorize(state, action) {
      state.authorized = false
      state.error = null
    },
    authSuccess(state, action) {
      state.authorized = true
      state.userInfo = action.payload
    },
    authFailure(state, action) {
      state.authorized = false
      state.error = action.payload.error
    },
    logout(state) {
      state.authorized = false
      state.error = null
      state.userInfo = null
    }
  }
})

const reducer = userSlice.reducer
const {signUp, authorize, authSuccess, authFailure, logout} = userSlice.actions

export { reducer, signUp, authorize, authSuccess, authFailure, logout }
