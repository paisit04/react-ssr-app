import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import App from './App';
import createStore from "./store";

const store = createStore( window.REDUX_DATA );

const jsx = (
    <ReduxProvider store={ store }>
        <Router>
            <App />
        </Router>
    </ReduxProvider>
);

ReactDOM.hydrate(jsx, document.getElementById('root'));
registerServiceWorker();
