import * as Font from 'expo-font';

async function loadFont() {
  await Font.loadAsync({
    ComfortaaLight: require('~/assets/fonts/Comfortaa-Light.ttf'),
    Comfortaa: require('~/assets/fonts/Comfortaa-Regular.ttf'),
    ComfortaaBold: require('~/assets/fonts/Comfortaa-Bold.ttf'),
  });
}

export default loadFont;
