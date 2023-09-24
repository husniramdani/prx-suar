import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import Home from '@modules/home';
import Profile from '@modules/profile';

enableScreens();

function StackNav() {
  const SplashStack = createNativeStackNavigator();
  const PrivateStack = createNativeStackNavigator();
  const AuthStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <PrivateStack.Navigator>
        <PrivateStack.Screen name="Home" component={Home} options={{ title: 'Welcome' }} />
        <PrivateStack.Screen name="Profile" component={Profile} />
      </PrivateStack.Navigator>
    </NavigationContainer>
  );
}

export default StackNav;
