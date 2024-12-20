import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
