// import React from 'react';
import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
        drawerType: 'slide', // Можно использовать 'front', 'back' или 'slide'
        drawerPosition: 'left', // Левая или правая сторона
      }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;

// import {createDrawerNavigator} from '@react-navigation/drawer';

// import HomeScreen from '../screens/HomeScreen';

// const Drawer = createDrawerNavigator();
