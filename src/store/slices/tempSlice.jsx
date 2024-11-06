import { createSlice } from "@reduxjs/toolkit";

const tempSlice = createSlice({
  name: "temporary",
  initialState: "This is testing",
  reducers: {
    updateTemp(state) {
      return (state = "updated");
    },
  },
});

export default tempSlice.reducer;
export const { updateTemp } = tempSlice.actions;
