import { configureStore } from "@reduxjs/toolkit";
import videoReducer from './features/videos/videosSlice'
import tagesReducer from './features/tages/tagesSlice'

const store = configureStore({
   reducer: {
      videos: videoReducer,
      tags: tagesReducer
   }

})
export default store;