import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLaunchesAPI } from "../../Acitons/launches";

export const fetchLaunchesData = createAsyncThunk(
  "launches/fetchLaunchesData",
  fetchLaunchesAPI
);

const initialState = {
  loading: false,
  launches: [],
  totalPages: 0,
  page: 0,
};
const launchesSlice = createSlice({
  name: "launches",
  initialState,
  extraReducers: {
    [fetchLaunchesData.pending]: (state) => {
      state.loading = true;
    },
    [fetchLaunchesData.fulfilled]: (state, action) => {
      state.loading = false;
      state.launches = action.payload.docs;
      state.totalPages = action.payload.totalPages;
      state.page = action.payload.page;
    },
    [fetchLaunchesData.rejected]: (state) => {
      state.loading = false;
      // state.error = action.payload.message;
    },
  },
});

export default launchesSlice.reducer;
