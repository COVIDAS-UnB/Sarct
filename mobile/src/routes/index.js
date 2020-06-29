// eslint-disable-next-line import/no-extraneous-dependencies
import React from 'react';

import AppNavigator from './app.routes';
import { useAuth } from '~/contexts/auth';
import SignIn from '~/pages/SignIn';

const Routes = () => {
  const { signed } = useAuth();

  return signed ? <AppNavigator /> : <SignIn />;
};

export default Routes;
