import * as types from "./actionTypes";

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});
export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});
export const removeTodo = (id) => ({
  type: types.REMOVE_TODO,
  payload: id,
});
export const updateTodo = (todo) => ({
  type: types.UPDATE_TODO,
  payload: todo,
});
