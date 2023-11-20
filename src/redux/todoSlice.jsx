import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] },
  reducers: {
    addTodo: (state, payload) => {
      console.log("123", payload);
      const newTodo = {
        id: payload.id,
        label: payload.label,
      };
      state.todos.push(newTodo);
    },
  },
});
console.log(todoSlice);
export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
