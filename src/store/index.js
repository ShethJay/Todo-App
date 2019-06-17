import { createPromise } from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();

const reduxStore = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunkMiddleware,
      createPromise({ promiseTypeSuffixes: ['LOADING', 'SUCCESS', 'ERROR'] }),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

// reduxStore.subscribe(() => {
//   saveState({
//     todo: reduxStore.getState().todo,
//   });
// });

export default reduxStore;
