import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Home from 'components/Home';

const AsyncDetail = importedComponent(() => import(/* webpackChunkName: 'detail' */ 'components/Detail'));
const AsyncNotFound = importedComponent(() => import(/* webpackChunkName: '404' */ 'components/NotFound'));

export const Context = React.createContext();

class Container extends Component {
    state = {
        count: 0
    }

    increase = () => {
        this.setState({ count: this.state.count + 1 });    
    }

    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        const value = {
            count: this.state.count,
            increase: this.increase,
            decrease: this.decrease
        };

        return (
            <Context.Provider
                value={value}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

const App = () => (
    <Container>
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/detail" component={AsyncDetail} />
                    <Route component={AsyncNotFound}/>
                </Switch>      
            </div>
        </Router>
    </Container>
)

export default App;