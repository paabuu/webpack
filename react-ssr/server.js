import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

import * as express from 'express';
import getData from './getData';

const app = express();
app.get('**', (req, res) => {
    getData().then(data => {
        const html = renderToString(<App facts={data} />);
        res.set('Cache-control', 'public, max-age=600, s-maxage=1200');
        res.send(html);
    })
})