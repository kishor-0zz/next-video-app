import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getVideos from "./videosApi";

const initialState = {
   videos: [],
   isLodding: "false",
   isError: "false",
   error: ""
}

// async thunk
const fetchVideos = createAsyncThunk("videos/fetchVideos",
   async () => {
      const videos = await getVideos();
      return videos
   })



const videoSlice = createSlice({
   name: "videos",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchVideos.pending, (state) => {
            state.isLodding = "true",
               state.isError = "false"
         })
         .addCase(fetchVideos.fulfilled, (state, action) => {
            state.isLodding = "false",
               state.isError = "false"
            state.videos = action.payload
         })
         .addCase(fetchVideos.rejected, (state, action) => {
            state.isLodding = "false",
               state.isError = "true"
            state.videos = []
            state.error = action.error?.message
         })
   }
})
export default videoSlice.reducer;


