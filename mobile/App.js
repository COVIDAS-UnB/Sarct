import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StatusBar } from 'react-native';

import { AuthProvider, useAuth } from '~/contexts/auth';
import Routes from '~/routes';
import loadFont from '~/util/loadFont';

const App = () => {
  const [isReady, setIsReady] = useState(true);
  const { loading } = useAuth();

  if (isReady) {
    return (
      <AppLoading
        startAsync={!loading && loadFont}
        onFinish={() => setIsReady(false)}
      />
    );
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="lighten-content" backgroundColor="#0279db" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App;
