import * as actionTypes from './actionTypes';

const initialState = {
  todos: [],
  selectedTab: 0,
  isDialogOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: +new Date(),
            title: payload,
            isDone: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
        // todos: state.todos.map(todo => (todo.id === payload
        // ? { ...todo, isRemoved: true } : todos)) to soft delete,
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        // todos: state.todos.filter(todo => todo.id !== payload),
        todos: state.todos.map(todo => (todo.id === payload.id
          ? { ...todo, isDone: payload.isChecked }
          : todo)),
      };
    case actionTypes.ON_TAB_CLICK:
      return {
        ...state,
        selectedTab: payload,
      };
    case actionTypes.CLOSE_DIALOG:
      return {
        ...state,
        isDialogOpen: false,
      };
    case actionTypes.OPEN_DIALOG:
      return {
        ...state,
        isDialogOpen: true,
      };
      // case actionTypes.UPDATE_TODO:
      // return {
      //   ...state,
      //    todo: state.todo.filter(todo => todo.id !== payload),
      //   todos: state.todos.map(todo => (todo.id === payload.id ? { ...todo, ...payload.todo }
      //     : todo)),
      // };
    default:
      return state;
  }
};
