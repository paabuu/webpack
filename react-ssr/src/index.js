import React from 'react';
import { render } from 'react-dom';
import App from './src/App';
import getData from './src/getData';


import getData from './src/getData';

getData().then(data => {
    render(<App facts={ data } />, document.querySelector('#root'));
})

