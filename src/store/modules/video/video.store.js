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
    "1": [{
      id: "1",
      url: "https://www.youtube.com/watch?v=ZITh-XIikgI",
      title: "R.E.M.",
      description: "ÜBerlin (Official Music Video)",
      userId: "1"
    },
      {
        id: "5",
        url: "https://www.youtube.com/watch?v=aGSKrC7dGcY",
        title: "Depeche Mode",
        description: "Enjoy The Silence (Official Video)",
        userId: "2"
      },
      {
        id: "3",
        url: "https://www.youtube.com/watch?v=1lyu1KKwC74",
        title: "The Verve",
        description: "Bitter Sweet Symphony (Official Music Video)",
        userId: "1"
      }],
    "3": [{
      id: "2",
      url: "https://www.youtube.com/watch?v=d-mYX0qKkB8",
      title: "Placebo",
      description: "Running Up That Hill (A Deal With God) (Cover) Official Music Video",
      userId: "3"
    }],
    "2": [{
      id: "4",
      url: "https://www.youtube.com/watch?v=aGSKrC7dGcY",
      title: "Depeche Mode",
      description: "Enjoy The Silence (Official Video)",
      userId: "2"
    }],
  },
  name: "videos",
  reducers: {
    add(state, action) {
      action.payload.forEach(video => state[video.id] = video)
    },
    remove(state, action) {
      action.payload.forEach(video_id => delete state[video_id])
    }
  }
})

const reducer = videosListSlice.reducer
const {add, remove} = videosListSlice.actions

export { reducer, add, remove }
