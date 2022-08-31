import {createSlice} from "@reduxjs/toolkit"

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
