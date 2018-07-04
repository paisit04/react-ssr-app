import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import createStore, { initializeSession } from "../src/store";
import App from '../src/App';

const PORT = 2048;
const app = express();

app.use( express.static( path.resolve(__dirname, '..', 'build') ) );

app.get( "/*", ( req, res ) => {
    const context = { };
    const store = createStore( );

    store.dispatch( initializeSession( ) );

    const jsx = (
        <ReduxProvider store={ store }>
            <StaticRouter context={ context } location={ req.url }>
                <App />
            </StaticRouter>
        </ReduxProvider>
    );

    const reactDom = renderToString( jsx );
    const reduxState = store.getState( );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom, reduxState ) );
} );

app.listen( PORT );
console.log(`Local: http://localhost:${PORT}`)

function htmlTemplate( reactDom, reduxState ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState ) }
            </script>
            <script src="./index.js"></script>
        </body>
        </html>
    `;
}