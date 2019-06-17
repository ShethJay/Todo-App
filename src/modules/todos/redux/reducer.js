import * as actionTypes from './actionTypes';
import RequestStates from '../../../utils/request-states';

const localInitialState = localStorage.getItem('todo');
let localState = [];
if (localInitialState) {
  localState = JSON.parse(localInitialState);
}

const initialState = {
  todos: localState,
  selectedTab: 0,
  currentDialogNames: [],
  requestState: RequestStates.init,
  todosListError: null,
  responseMessage: '',

};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_TODO_LOADING: {
      return {
        ...state,
        requestState: RequestStates.loading,
        todosListError: null,
        responseMessage: '',
      };
    }
    case actionTypes.ADD_TODO_SUCCESS: {
      const todosList = [
        ...state.todos,
        {
          id: payload.data.id,
          title: payload.data.title,
          isDone: payload.data.isDone,
        }];
      localStorage.setItem('todo', JSON.stringify(todosList));
      return {
        ...state,
        todos: todosList,
        requestState: RequestStates.success,
        todosListError: null,
        responseMessage: 'Todo added succesfully',
      };
    }
    case actionTypes.ADD_TODO_ERROR: {
      return {
        ...state,
        requestState: RequestStates.error,
        todosListError: 'Unknown error',
        responseMessage: 'Adding Todo Failed',
      };
    }

    case actionTypes.REMOVE_TODO_LOADING: {
      return {
        ...state,
        requestState: RequestStates.loading,
        todosListError: null,
        responseMessage: '',
      };
    }
    case actionTypes.REMOVE_TODO_SUCCESS: {
      const todosList = state.todos.filter(todo => todo.id !== payload.data.id);
      localStorage.setItem('todo', JSON.stringify(todosList));
      return {
        ...state,
        todos: todosList,
        requestState: RequestStates.success,
        todosListError: null,
        responseMessage: 'Todo removed successflly',
        // todos: state.todos.map(todo => (todo.id === payload
        // ? { ...todo, isRemoved: true } : todos)) to soft delete,
      };
    }
    case actionTypes.REMOVE_TODO_ERROR: {
      return {
        ...state,
        requestState: RequestStates.error,
        todosListError: 'Unknown error',
        responseMessage: 'Remove todo failed',
      };
    }

    case actionTypes.GET_TODOS_LIST_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        todosListError: null,
        responseMessage: '',
      };
    case actionTypes.GET_TODOS_LIST_SUCCESS: {
      const todosList = payload.data;
      localStorage.setItem('todo', JSON.stringify(todosList));
      return {
        ...state,
        todos: todosList,
        requestState: RequestStates.success,
        todosListError: null,
        responseMessage: '',
      };
    }
    case actionTypes.GET_TODOS_LIST_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        todosListError: 'Unknown error',
        responseMessage: '',
      };

    case actionTypes.CHECK_TODO_LOADING:
      return {
        ...state,
        requestState: RequestStates.loading,
        todosListError: null,
        responseMessage: '',
      };
    case actionTypes.CHECK_TODO_SUCCESS: {
      const todosList = state.todos.map(todo => (todo.id === payload.data.id
        ? {
          ...todo, isDone: payload.data.isDone,
        } : todo));
      localStorage.setItem('todo', JSON.stringify(todosList));
      return {
        ...state,
        todos: todosList,
        requestState: RequestStates.success,
        todosListError: null,
        responseMessage: 'Todo moved successfully',
      };
    }
    case actionTypes.CHECK_TODO_ERROR:
      return {
        ...state,
        requestState: RequestStates.error,
        todosListError: 'Unknown error',
        responseMessage: '',
      };
    case actionTypes.FLUSH_TODOS_LIST:
      return {
        ...state,
        todos: [],
      };

    case actionTypes.CHANGE_SELECTED_TAB:
      return {
        ...state,
        selectedTab: payload,
        responseMessage: '',
      };
    case actionTypes.OPEN_DIALOG:
      return {
        ...state,
        currentDialogNames: [
          ...state.currentDialogNames,
          payload,
        ],
        responseMessage: '',
      };
    case actionTypes.CLOSE_DIALOG:
      return {
        ...state,
        currentDialogNames: state.currentDialogNames
          .filter(dialogName => dialogName !== payload),
        responseMessage: '',
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
