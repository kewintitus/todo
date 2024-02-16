import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      console.log(action.payload);
      return [...state, action.payload];
    },
    addTodos: (state, action) => {
      //   console.log(action.payload);
      return action.payload;
    },
  },
});

export const getTodos = (state) => {
  //   console.log(state);
  return state.todo;
};

export const { addTodo, addTodos } = todoSlice.actions;
export default todoSlice.reducer;
