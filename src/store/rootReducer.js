import { combineReducers} from 'redux';
import todoReducer from '../modules/todos/redux/reducer';
const rootReducer = combineReducers({
    todo: todoReducer,
});
export default rootReducer;