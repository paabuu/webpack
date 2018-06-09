import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Todo from './Todo';
import todo from './TodoRedux';
import TodoDone from '@components/TodoDone';

const reducer = combineReducers({ todo })
const store = createStore(reducer);

const NotFound = () => (
    <h1>404 not found</h1>
);

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <ul className="nav">
                    <li><NavLink exact to="/" activeStyle={{ color: 'orange'}}>Todo List</NavLink></li>
                    <li><NavLink to="/done" activeStyle={{ color: 'orange'}}>Todo Done</NavLink></li>
                </ul>
                    <Switch>
                    <Route exact path="/" component={Todo} />
                    <Route path="/done" component={TodoDone} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    </Provider>        
);

ReactDOM.render(<App />,  document.getElementById('root') );

