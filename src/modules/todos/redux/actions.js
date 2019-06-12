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

export const changeSelectedTab = tabValue => ({
  type: actionTypes.CHANGE_SELECTED_TAB,
  payload: tabValue,
});

export const openDialog = dialogName => ({
  type: actionTypes.OPEN_DIALOG,
  payload: dialogName,
});

export const closeDialog = dialogName => ({
  type: actionTypes.CLOSE_DIALOG,
  payload: dialogName,
});


// export const updateTodo = (id, todo) => ({
//   type: actionTypes.UPDATE_TODO,
//   payload: { id, todo },
// });
