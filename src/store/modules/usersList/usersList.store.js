// [
//   {
//     "id": "aa38a317e1e227794e9947a30e8de6f2",
//     "slug": "vitalii_hrozynskyi",
//     "userPic": "https://i.pravatar.cc/150?u=vitalii_hrozynskyi",
//     "userName": "Vitalii Hrozynskyi"
//   }
// ]
import {createSlice} from "@reduxjs/toolkit"
import annaMay from "../../../assets/avatars/anna-may-avatar.jpg"
import denBennet from "../../../assets/avatars/den-bennet-avatar.jpg"
import janeDou from "../../../assets/avatars/jane-dou-avatar.jpg"
import kerryWilliams from "../../../assets/avatars/kerry-willams-avatar.jpg"

const usersListSlice = createSlice({
  initialState: {
    "1": {
      id: "1",
      slug: "Anna_May",
      userPic: annaMay,
      userName: "Anna May"
    },
    "2": {
      id: "2",
      slug: "Den_Bennet",
      userPic: denBennet,
      userName: "Den Bennet"
    },
    "3": {
      id: "3",
      slug: "Jane_Dou",
      userPic: janeDou,
      userName: "Jane Dou"
    },
    "4": {
      id: "4",
      slug: "Kerry Williams",
      userPic: kerryWilliams,
      userName: "Kerry Williams"
    },
  },
  name: "users",
  reducers: {
    add(state, action) {
      action.payload.forEach(user => state[user.id] = user)
    },
    remove(state, action) {
      action.payload.forEach(user_id => delete state[user_id])
    }
  }
})

const reducer = usersListSlice.reducer
const {add, remove} = usersListSlice.actions

export { reducer, add, remove }
