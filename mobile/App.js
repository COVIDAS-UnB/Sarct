import { NavigationContainer } from '@react-navigation/native';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
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
      <StatusBar barStyle="lighten-content" backgroundColor="#0279db" />
      <Routes />
    </NavigationContainer>
  );
};

export default App;
