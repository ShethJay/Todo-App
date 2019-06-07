import * as actionTypes from './actionTypes';

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: title,
});
export const removeTodo = id => ({
  type: actionTypes.REMOVE_TODO,
  payload: id,
});
export const checkTodo = (id, isChecked) => ({
  type: actionTypes.CHECK_TODO,
  payload: { id, isChecked },
});
export const updateTodo = (id, todo) => ({
  type: actionTypes.UPDATE_TODO,
  payload: { id, todo },
});

export const onTabClick = tabValue => ({
  type: actionTypes.ON_TAB_CLICK,
  payload: tabValue,

});
