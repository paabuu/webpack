import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import repos from './reducers';

let store;
const rootReducer = combineReducers({ repos });

if (__isBrowser__) {
    store = createStore(rootReducer, window.__INIT_STATE__, applyMiddleware(thunk))
} else {
    store = createStore(rootReducer, applyMiddleware(thunk))
}

export default store;
