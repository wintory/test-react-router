import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import './css/index.css';
import ProvDetail from './page/ProvDetail'
import Login from './page/login'


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" Component={App}>
      <Route path="provdetail" Component={ProvDetail}/>
        <Route path="login" Component={Login}/>
    </Route>
  </Router>
  ,document.getElementById('root')
);
