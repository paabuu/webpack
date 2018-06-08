import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Todo from './Todo';
import todo from './TodoRedux';

const reducer = combineReducers({ todo })
const store = createStore(reducer);


console.log(store.getState());

const App = () => (
    <Provider store={store}>
        <Todo />
    </Provider>        
);

ReactDOM.render(<App />,  document.getElementById('root') );

