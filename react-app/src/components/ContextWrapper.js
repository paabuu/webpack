import React from 'react';
import { Context } from 'App';

export default function Wrapper(Component) {
    return (props) => (
        <Context.Consumer>
            {
                (context) => <Component {...context} {...props} />
            }
        </Context.Consumer>
    )
} 