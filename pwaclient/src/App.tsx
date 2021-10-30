import React from 'react';
import {  Route, Switch } from 'react-router';
import {BrowserRouter as Router,} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Login';

function App() {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path="/login" children={()=><Login/>} />
            <Route path="/register" children={()=><Register/>} />
            <Route path="/" />
        </Switch>
    </Router>
  );
}

export default App;
