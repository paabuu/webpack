import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import Hello from './Hello';

const Container = () => (
    <div>
        <App message="Hello again" />
        <Hello name="Hippo" age={1} />
    </div>
);

ReactDOM.render(<Container />,  document.getElementById('root') );

