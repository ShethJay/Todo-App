import { combineReducers } from 'redux';
import { todoReducer } from '../modules/todos';

const rootReducer = combineReducers({
  todo: todoReducer,
});

export default rootReducer;
