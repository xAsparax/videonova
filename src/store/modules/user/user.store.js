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
    userInfo: null,
  },
  name: "user",
  reducers: {
    login(state, action) {
      state.authorized = true
      state.userInfo = action.payload
    },
    logout(state) {
      state.authorized = false
      state.userInfo = null
    }
  }
})

const reducer = userSlice.reducer
const {login, logout} = userSlice.actions

export { reducer, login, logout }
