import { configureStore } from "@reduxjs/toolkit";
import tempSlice from "./slices/tempSlice";
const store = configureStore({
  reducer: {
    temp: tempSlice,
  },
});

export default store;
