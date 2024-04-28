import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from '../components/connexion/Welcome';
import SignIn from '../components/connexion/SignIn';
import SignUp from '../components/connexion/SignUp';
import MainNavigator from './MainNavigator';

const Stack = createNativeStackNavigator();

const StartNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartNavigator;
