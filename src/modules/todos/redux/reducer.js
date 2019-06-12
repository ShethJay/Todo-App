import * as actionTypes from './actionTypes';

const localInitialState = localStorage.getItem('todo');
let localState = [];
if (localInitialState) {
  localState = JSON.parse(localInitialState);
}

const initialState = {
  todos: localState,
  selectedTab: 0,
  currentDialogNames: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO: {
      const addTodo = [
        ...state.todos,
        {
          id: +new Date(),
          title: payload,
          isDone: false,
        },
      ];
      localStorage.setItem('todo', JSON.stringify(addTodo));
      return {
        ...state,
        todos: addTodo,
      };
    }
    case actionTypes.REMOVE_TODO: {
      const removedTodo = state.todos.filter(todo => todo.id !== payload);
      localStorage.setItem('todo', JSON.stringify(removedTodo));

      return {
        ...state,
        todos: removedTodo,
        // todos: state.todos.map(todo => (todo.id === payload
        // ? { ...todo, isRemoved: true } : todos)) to soft delete,
      };
    }
    case actionTypes.CHECK_TODO: {
      const doneTodo = state.todos.map(todo => (todo.id === payload.id
        ? { ...todo, isDone: payload.isChecked }
        : todo));
      localStorage.setItem('todo', JSON.stringify(doneTodo));

      return {
        ...state,
        todos: doneTodo,
        // todos: state.todos.filter(todo => todo.id !== payload),
      };
    }
    case actionTypes.CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: payload,
      };
    case actionTypes.OPEN_DIALOG:
      return {
        ...state,
        currentDialogNames: [
          ...state.currentDialogNames,
          payload,
        ],
      };
    case actionTypes.CLOSE_DIALOG:
      return {
        ...state,
        currentDialogNames: state.currentDialogNames
          .filter(dialogName => dialogName !== payload),
      };
    default:
      return state;
        // case actionTypes.UPDATE_TODO:
        // return {
        //   ...state,
        //    todo: state.todo.filter(todo => todo.id !== payload),
        //   todos: state.todos.map(todo => (todo.id === payload.id ? { ...todo, ...payload.todo }
        //     : todo)),
        // };
  }
};
