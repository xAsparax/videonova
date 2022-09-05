/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

// [
//   {
//     "id": "aa38a317e1e227794e9947a30e8de6f2",
//     "slug": "vitalii_hrozynskyi",
//     "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//     "userName": "Vitalii Hrozynskyi"
//   }
// ]

const usersListSlice = createSlice({
  initialState: {},
  name: "users",
  reducers: {
    load(state) {
      state = {}
    },
    add(state, action) {
      action.payload.forEach((user) => (state[user.id] = user))
    },
    remove(state, action) {
      action.payload.forEach((user_id) => delete state[user_id])
    },
  },
})

const { reducer } = usersListSlice
const { load, add, remove } = usersListSlice.actions

export { reducer, load, add, remove }
