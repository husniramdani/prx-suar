import React, { useEffect } from 'react';
import StackNav from '@routes/stack-nav';
import SplashScreen from 'react-native-splash-screen';
import { Platform } from 'react-native';

function App(): JSX.Element {
  useEffect(() => {
    if (Platform.OS === 'android') SplashScreen.hide();
  }, []);
  return <StackNav />;
}

export default App;
