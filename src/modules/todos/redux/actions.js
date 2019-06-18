import * as actionTypes from './actionTypes';
import api from '../../../utils/api';

export const addTodo = title => ({
  type: actionTypes.ADD_TODO,
  payload: api.post('/todos/',
    {
      id: +new Date(),
      title,
      isDone: false,
    }),
});

export const deleteTodo = id => ({
  type: actionTypes.DELETE_TODO,
  payload: api.delete(`/todos/${id}`),
});

export const checkTodo = (id, isChekded) => ({
  type: actionTypes.CHECK_TODO,
  payload: api.put(`/todos/${id}`, {
    isDone: isChekded,
  }),
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

export const getTodosList = () => ({
  type: actionTypes.GET_TODOS_LIST,
  payload: api.get('/todos'),
});

export const getTodosListByPage = (page = 1, limit = 10) => ({
  type: actionTypes.GET_TODOS_LIST_BY_PAGE,
  payload: api.get(`/todos?page=${page}&limit=${limit}`)
    .then(res => ({ data: res.data, page, limit })),
});

export const flushTodosList = () => ({
  type: actionTypes.FLUSH_TODOS_LIST,
});


// export const updateTodo = (id, todo) => ({
//   type: actionTypes.UPDATE_TODO,
//   payload: { id, todo },
// });
