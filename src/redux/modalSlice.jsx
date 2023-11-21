import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (state) => {
      state.value = true;
    },
    hideModal: (state) => {
      state.value = false;
    },
  },
});
console.log(modalSlice);
export const { showModal, hideModal } = modalSlice.actions;
export default modalSlice.reducer;
