import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getRelatedVideos from "./relatedVideosApi";

const initialState = {
   relatedVideos: [],
   isLodding: false,
   isError: false,
   error: ""
}

export const fetchRelatedVideos = createAsyncThunk('relatedVideos/fetchRelatedVideos',
   async (tags, id) => {
      const relateVideos = await getRelatedVideos(tags, id);
      return relateVideos
   }
)

const relatedVideosSlice = createSlice({
   name: "relatedVideos",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchRelatedVideos.pending, (state) => {
            state.isLodding = true,
               state.isError = false
         })
         .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
            state.isLodding = false,
               state.isError = false,
               state.relatedVideos = action.payload
         })
         .addCase(fetchRelatedVideos.rejected, (state, action) => {
            state.isLodding = false,
               state.isError = true
            state.relatedVideos = []
            state.error = action.error?.message
         })

   }

})
export default relatedVideosSlice.reducer;