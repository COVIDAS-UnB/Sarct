import React from 'react';
import { Switch, Route } from 'react-router-dom';

import List from './pages/List';
import NewPoint from './pages/NewPoint';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/list" exact component={List} />
      <Route path="/newPoint" exact component={NewPoint} />
    </Switch>
  );
}
