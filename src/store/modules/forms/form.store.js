import {createSlice} from "@reduxjs/toolkit"

// {
//   "id": "aa38a317e1e227794e9947a30e8de6f2",
//   "slug": "vitalii_hrozynskyi",
//   "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//   "userName": "Vitalii Hrozynskyi",
//   "token": "c3cad1232910274cab638376b7923212"
// }

const formsSlice = createSlice({
  initialState: {
    isSignUp: false,
    show: false,
    username: null,
    password: null,
    passwordCheck: null
  },
  name: "forms",
  reducers: {
    show(state, action) {
      state.isSignUp = action.payload.isSignUp
      state.show = true
    },
    hide(state, action) {
      state.show = false
    },
    update(state, action) {
      state.username = action.payload.username
      state.password = action.payload.password
      if (state.isSignUp) state.passwordCheck = action.payload.passwordCheck
    }
  }
})

const reducer = formsSlice.reducer
const {show, hide, update} = formsSlice.actions

export { reducer, show, hide, update }
