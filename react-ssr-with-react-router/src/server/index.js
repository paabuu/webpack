import express from 'express';
import cors from 'cors';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { matchPath, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';

import routes from '../shared/routes';
import App from '../shared/App';
import store from '../shared/redux/store';
const app = express();

app.use(cors());
app.use(express.static('public'));

app.get('*', (req, res) => {
    const activeRoute = routes.find(route => matchPath(req.url, route)) || {};
    const promise = activeRoute.action
        ? store.dispatch(activeRoute.action(req.path))
        : Promise.resolve();

    promise
    .then(data => {
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url} context={{data}}>
                    <App data={data} />
                </StaticRouter>
            </Provider>
        );

        const html = `
            <!DOCTYPE html>
            <html>
                <head>
                    <title>React SSR</title>
                    <link rel="stylesheet" href="/style.css" />
                    <script>window.__INIT_STATE__ = ${serialize(store.getState())}</script>
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
