import { createSlice } from "@reduxjs/toolkit";

export const ALL = "ALL";
export const COMPLETE = "COMPLETE";
export const INCOMPLETE = "INCOMPLETE";

const initialState = {
  checked: ALL,
};

const selectSlice = createSlice({
  name: "select",
  initialState,
  reducers: {
    setChecked: (state, { payload }) => {
      state.checked = payload;
      switch (payload) {
        case COMPLETE:
          state.checked = COMPLETE;
          break;
        case INCOMPLETE:
          state.checked = INCOMPLETE;
          break;
        case ALL:
          state.checked = ALL;
          break;
        default:
          state.checked = ALL;
      }
    },
  },
});

export const { setChecked } = selectSlice.actions;
export default selectSlice.reducer;
