import React from 'react';
import {MainPage} from './src/mainPage/main-page.component';
import {NavigationContainer} from '@react-navigation/native';
import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export function AppNav() {
  return (
    <NavigationContainer>
      <MainPage />
    </NavigationContainer>
  );
}

export default App;
