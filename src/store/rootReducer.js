import { combineReducers } from 'redux';
import todoReducer from '../modules/todos/redux/reducer';

const rootReducer = combineReducers({
  todos: todoReducer,
});
export default rootReducer;
