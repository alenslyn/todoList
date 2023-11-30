import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  options: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state, { payload }) => {
      const { options = {} } = payload || {};
      state.options = options;
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
