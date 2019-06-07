import * as actionTypes from './actionTypes';

const initialState = {
  todo: [],
  currentFilter: null,
  selectedTab: 0,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO:
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            id: +new Date(),
            title: payload,
            isDone: false,
            isRemoved: false,
          },
        ],
        currentFilter: null,
      };
    case actionTypes.REMOVE_TODO:
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== payload),
        // todo: state.todo.map(todo => (todo.id === payload
        // ? { ...todo, isRemoved: true } : todo)) to soft delete,
      };
    case actionTypes.CHECK_TODO:
      return {
        ...state,
        // todo: state.todo.filter(todo => todo.id !== payload),
        todo: state.todo.map(todo => (todo.id === payload.id
          ? { ...todo, isDone: payload.isChecked }
          : todo)),
      };
    case actionTypes.UPDATE_TODO:
      return {
        ...state,
        // todo: state.todo.filter(todo => todo.id !== payload),
        todo: state.todo.map(todo => (todo.id === payload.id ? { ...todo, ...payload.todo }
          : todo)),
      };
    case actionTypes.SHOW_ALL:
      return {
        ...state,
        currentFilter: null,
      };
    case actionTypes.IS_ACTIVE:
      return {
        ...state,
        // todo: state.todo.filter(todo => todo.done !== true),
        currentFilter: 'isActive',
      };
    case actionTypes.IS_COMPLETE:
      return {
        ...state,
        // todo: state.todo.filter(todo => todo.done !== true),
        currentFilter: 'isDone',
      };
    case actionTypes.ON_TAB_CLICK:
      return {
        ...state,
        selectedTab: payload,
      };
    default:
      return state;
  }
};
