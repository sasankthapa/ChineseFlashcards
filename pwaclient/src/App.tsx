import React from 'react';
import {  Redirect, Route, RouteProps, Switch } from 'react-router';
import {BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Login';
import Page from './components/Page';
import { useAppSelector } from './hooks';

export type AuthedRouteProps = {
}

const AuthedRoute = (children:,...rest:RouteProps[]) => {
    const auth=useAppSelector(state => state.user.authed);

    return (
        <Route {...rest} render={() => {
          return auth
            ? children
            : <Redirect to='/login' />
        }} />
    )
}

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/login" children={()=><Login/>} />
            <Route path="/register" children={()=><Register />} />
            <AuthedRoute children={<Page />} />
        </Switch>
    </Router>
  );
}

export default App;
