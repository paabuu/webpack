import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from 'components/Home';

const AsyncDetail = importedComponent(() => import(/* webpackChunkName: 'detail' */ 'components/Detail'));
const AsyncNotFound = importedComponent(() => import(/* webpackChunkName: '404' */ 'components/NotFound'));

const App = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail" component={AsyncDetail} />
                <Route component={AsyncNotFound}/>
            </Switch>      
        </div>
    </Router>
)

export default App;