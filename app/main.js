import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import './style/app.css';

import App from './component/SukusukuApp.jsx';
import About from './component/About.jsx';
import NotFound from './component/NotFound.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
     <Route path="/" component={App}/>
     <Route path="/about" component={About}/>
     <Route path="/*" component={NotFound}/>
  </Router>,
  document.getElementById('root')
);
