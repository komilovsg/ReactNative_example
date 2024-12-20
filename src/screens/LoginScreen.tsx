import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'Register'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#20315f',
            textAlign: 'center',
          }}>
          TEST PASSKEY
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={{gap: 5, width: '90%'}}>
          <Text style={{fontSize: 24, fontWeight: '600', marginVertical: 10}}>
            Login
          </Text>
          <TextInput
            placeholder="&#65312; Email"
            style={{borderWidth: 1, width: '100%', padding: 5, borderRadius: 7}}
          />
          <TextInput
            placeholder="&#128272; Password"
            style={{borderWidth: 1, width: '100%', padding: 5, borderRadius: 7}}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={{
              backgroundColor: 'blue',
              padding: 5,
              width: '100%',
              borderRadius: 5,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#fff',
                textAlign: 'center',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text>You are new?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{
                  backgroundColor: '#AD40AF',
                  padding: 5,
                  borderRadius: 5,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: '#fff',
                  textAlign: 'center',
                }}>
                Registration
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
