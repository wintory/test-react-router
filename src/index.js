import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App';
import './css/index.css';
import ProvDetail from './page/ProvDetail'
import Login from './page/login'



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="provdetail" component={ProvDetail}/>
        <Route path="login" component={Login}/>
    </Route>
  </Router>
  ,document.getElementById('root')
);
