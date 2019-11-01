import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, combineRedusers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import App from "./App";
import './App.scc';

import * as reducers from './store/redusers';
const store = createStore(combineRedusers(reducers), applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);