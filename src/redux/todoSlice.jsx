import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, label: "kakoihocheh" },
    { id: 2, label: "kakoihocheh2" },
    { id: 3, label: "kakoihocheh3" },
    { id: 4, label: "kakoihocheh4" },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      console.log("123", payload);
      const newTodo = {
        id: payload.id,
        label: payload.label,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, { payload }) => {
      const { id } = payload;
      const newArr = state.todos.filter((todo) => todo.id !== id);
      state.todos = newArr;
    },
  },
});
console.log(todoSlice);
export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
