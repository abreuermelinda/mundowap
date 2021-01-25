import React from 'react';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from '../store/store.js'

import { history } from '../history';

import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';


import baseLogin from '../containers/login';
import baseDashboard from '../containers/dashboard';

export default function Routes() {
    return (
        <Provider store={store}>
            <Router history={history}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={baseLogin(Login)} />                    
                    <Route path="/dashboard" exact component={baseDashboard(Dashboard)} />                    
                </Switch>
            </BrowserRouter>
            </Router>
        </Provider>
    );
}