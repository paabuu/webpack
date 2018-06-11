import { createStore, combineReducers } from 'redux';
import todo from './TodoRedux';

const reducer = combineReducers({ todo })

const configStore = (state) => {
    return createStore(reducer, state);
}

export default configStore;