import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import serialize from 'serialize-javascript';

import routes from '../shared/routes';
import App from '../shared/App';
import { fetchPopularRepos } from '../shared/api';
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
    const promise = activeRoute.fetchInitialData
        ? activeRoute.fetchInitialData(req.path)
        : Promise.resolve();

    promise
    .then(data => {
        const markup = renderToString(
            <StaticRouter location={req.url} context={{data}}>
                <App data={data} />
            </StaticRouter>
        );

        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>React SSR</title>
                    <script>window.__INIT_DATA__ = ${serialize(data)}</script>
                </head>
                <body>
                    <div id="root">${markup}</div>
                    <script src="/bundle.js"></script>
                </body>
            </html>
        `;

        res.send(html);
    })
});

app.listen(3000, () => {
    console.log('server is listening on port: 3000!')
});
