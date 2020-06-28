import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import Routes from '~/routes';
import loadFont from '~/util/loadFont';

const App = () => {
  const [isReady, setIsReady] = useState(true);

  if (isReady) {
    return (
      <AppLoading startAsync={loadFont} onFinish={() => setIsReady(false)} />
    );
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle="lighten-content" backgroundColor="#8E2DE2" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
