import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Main from './components/Main';
import Home from './components/views/Home';
import Results from './components/views/Results';
import Roster from './components/views/Roster';
import Schedule from './components/views/Schedule';
import Table from './components/views/Table';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path="/" component={Home} />
      <Route path="/results" component={Results} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/table" component={Table} />
    </Route>
  </Router>,
  document.getElementById('root')
);
