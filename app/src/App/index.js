import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import reducers from './reducers';
import api from '../services/api';

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, api)(createStore);
let store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import View from './view';

export default () => (
    <Router>
        <Provider store={store}>
            <View />
        </Provider>
    </Router>
);