import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, label: "Stretch for 10 min", checked: false },
    {
      id: 2,
      label: "Brainstorm what goes on landing page for 40m",
      checked: true,
    },
    { id: 3, label: "Arrange date night with my partner", checked: false },
  ],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    updateTodoList: (state, { payload }) => {
      console.log(payload);
      if (payload.id === undefined) {
        const newTodo = {
          id: (Math.random() * 100000).toFixed(0),
          label: payload.label,
          checked: false,
        };
        state.todos.push(newTodo);
      } else {
        const index = state.todos.findIndex(
          (element) => element.id === payload.id
        );
        const elem = state.todos[index];
        state.todos[index] = { ...elem, ...payload };
      }
    },
    deleteTodo: (state, { payload }) => {
      const { id } = payload;
      const newArr = state.todos.filter((todo) => todo.id !== id);
      state.todos = newArr;
    },
  },
});

export const { updateTodoList, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
