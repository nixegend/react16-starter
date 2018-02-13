import React from 'react';
import { Route, Switch } from 'react-router-dom';
import internalUrls from './common/constants/internalUrls';

import Home from './pages/Home';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import MainLayout from './pages/MainLayout';

const routes = (
  <MainLayout>
    <Switch>
      <Route exact path={`${internalUrls.HOME}`} component={Home} />
      <Route path={`/${internalUrls.USERS}`} component={Users} />
      <Route path="*" component={NotFound} />
    </Switch>
  </MainLayout>
);

export default routes;
