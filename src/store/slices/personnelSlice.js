import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  testState: {
    status: false,
    helperData: null,
  },
};

const personnelSlice = createSlice({
  initialState: initialState,
  name: "personnel",
  reducers: {
    testOpen(state, action) {
      state.testState.helperData = action.payload;
      state.testState.status = true;
    },
    testClose(state, action) {
      state.testState.status = false;
      state.testState.helperData = null;
    },
  },
});

export const { testOpen, testClose } = personnelSlice.actions;
export default personnelSlice.reducer;
