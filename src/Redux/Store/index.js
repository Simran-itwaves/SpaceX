import { configureStore } from "@reduxjs/toolkit";
import launchesReducer from "../Reducer/Launches/launchesSlice";

export default configureStore({
  reducer: {
    launches: launchesReducer,
  },
});
