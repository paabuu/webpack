import React from 'react';
import { render } from 'react-dom';
import App from './App';
import getData from './getData';


import getData from './getData';

getData().then(data => {
    render(<App facts={ data } />, document.querySelector('#root'));
})

