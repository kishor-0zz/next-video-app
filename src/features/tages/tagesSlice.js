import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import getTages from "./tagesApi"

const initialState = {
   tags: [],
   isLodding: false,
   isError: false,
   error: ""
}


export const fetchTages = createAsyncThunk("tages/fetchTages",
   async () => {
      const tags = await getTages()
      return tags
   }
)

const tagesSlice = createSlice({
   name: "tags",
   initialState,
   extraReducers: (builder) => {
      builder
         .addCase(fetchTages.pending, ((state) => {
            state.isLodding = true,
               state.isError = false
         }))
         .addCase(fetchTages.fulfilled, ((state, action) => {
            state.isLodding = false,
               state.tags = action.payload
         }))
         .addCase(fetchTages.rejected, ((state, action) => {
            state.isLodding = false,
               state.isError = true,
               state.tags = [],
               state.error = action.error?.message
         }))
   }
})
export default tagesSlice.reducer;