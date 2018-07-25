import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Okrs from './components/Okrs';

render((
    <Router>
      <Switch>
        <Redirect exact push from="/" to="/index"/>
        <Route path="/:quarter" component={Okrs}/>
      </Switch>
    </Router>
), document.getElementById('root'));
