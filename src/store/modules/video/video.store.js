// [
//   {
//     "url": "https://www.youtube.com/watch?v=JCOJS1wWmeo",
//     "title": "Музика для праці",
//     "description": "Нереально крутий трек, коли починаєш під нього працювати, то все ніби саме складається і виходить.",
//     "id": "string",
//     "userId": "string"
//   }
// ]
import {createSlice} from "@reduxjs/toolkit"

const videosListSlice = createSlice({
  initialState: {
  },
  name: "videos",
  reducers: {
    load(state) {
      state = {}
    },
    add(state, action) {
      action.payload.forEach(video => {
        if (state[video.userId] === undefined) state[video.userId] = {}
        state[video.userId][video.id] = video
      })
    },
    remove(state, action) {
      action.payload.forEach(video_id => delete state[video_id])
    }
  }
})

const reducer = videosListSlice.reducer
const {load, add, remove, upload } = videosListSlice.actions

export { reducer, load, add, remove, upload }
