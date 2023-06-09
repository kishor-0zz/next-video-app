import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './features/videos/videosSlice'
import tagesReducer from './features/tages/tagesSlice'
import videoReducer from './features/video/videoSlice'

const store = configureStore({
   reducer: {
      videos: videosReducer,
      tags: tagesReducer,
      video: videoReducer
   }

})
export default store;