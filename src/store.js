import { configureStore } from "@reduxjs/toolkit";
import videosReducer from './features/videos/videosSlice'
import tagesReducer from './features/tages/tagesSlice'
import videoReducer from './features/video/videoSlice'
import relatedVideosReducer from './features/relatedVideos/relatedVideosSlice'
import filterReducer from './features/filter/firterSlice'

const store = configureStore({
   reducer: {
      videos: videosReducer,
      tags: tagesReducer,
      video: videoReducer,
      relatedVideoss: relatedVideosReducer,
      filter: filterReducer
   }

})
export default store;