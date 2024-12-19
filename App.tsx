import React from 'react';
import {AuthProvider} from './src/context/AuthContext';
import {AppNav} from './src/navigation/AppNav';

import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';

type RootStackParamList = {
  Main: undefined;
  Home: undefined;
};

type MainScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Main'>;

type MainProps = {
  navigation: MainScreenNavigationProp;
};

const Stack = createNativeStackNavigator();

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main: React.FC<MainProps> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 20,
      }}>
      <View>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#20315f'}}>
          TEST PASSKEY
        </Text>
      </View>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#20315f'}}>
          TEST IT BY YOURSELF
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{
          backgroundColor: '#AD40AF',
          padding: 20,
          width: '90%',
          borderRadius: 5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: '#fff',
          }}>
          Let`s Begin
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 21,
            color: '#fff',
          }}>
          &#62;
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default App;
