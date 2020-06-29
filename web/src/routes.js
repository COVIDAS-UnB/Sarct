import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './pages/SignIn';
import List from './pages/List';
import Map from './pages/Map';
import NewPoint from './pages/NewPoint';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/list" exact component={List} />
      <Route path="/map" exact component={Map} />
      <Route path="/newPoint" exact component={NewPoint} />
    </Switch>
  );
}
