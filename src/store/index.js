import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import { loadState, saveState } from './localStorage';
const persistedState = loadState();


const reduxStore = createStore(
    rootReducer,
    persistedState,
    compose(
        applyMiddleware(),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    )
)

reduxStore.subscribe(() => {
    saveState({
        todo: reduxStore.getState().todo
    });
})


export default reduxStore;