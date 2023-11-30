import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import modalSlice from "./modalSlice";
import selectSlice from "./selectSlice";
import searchSlice from "./searchSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    modal: modalSlice,
    select: selectSlice,
    search: searchSlice,
  },
});
