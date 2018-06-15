import * as React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';

import Todo from './Todo';
import TodoDone from '@components/TodoDone';

import configStore from './store';

declare const window;

const store = configStore(window.__INITIAL_STATE__ || {});

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

export default hot(module)(App);