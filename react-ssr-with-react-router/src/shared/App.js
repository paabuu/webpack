import React, { Component } from 'react';
import Grid from '../shared/Grid';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Navbar from './Navbar';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                {routes.map(({ path, exact, component: C, ...rest }) => (
                    <Route
                        key={path}
                        path={path}
                        exact={exact}
                        render={props => (
                            <C {...props} {...rest} />
                        )}
                    />
                ))}
            </div>
        );
    }
}

export default App;
