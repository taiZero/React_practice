import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CounterApp from './CounterApp';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from "history";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/app" compornent={App} />
      <Route path="/counterapp" compornent={CounterApp} />
      <Redirect from="/" to="/app" />
    </Switch>
  </Router>,
 /*
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  */
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
