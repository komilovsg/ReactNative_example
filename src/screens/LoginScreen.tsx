import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {useState} from 'react';
import InputField from '../components/InputField';

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home', 'Register'>;

const LoginScreen: React.FC<Props> = ({navigation}) => {
  const {login} = useContext(AuthContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          <InputField
            label={'Email'}
            inputType="email-address"
            value={email}
            onChangeText={(text: string) => setEmail(text)} // Make sure text is typed as string
          />
          <InputField
            label={'Password'}
            inputType="password"
            value={password}
            onChangeText={(text: string) => setPassword(text)} // Make sure text is typed as string
          />
          <TouchableOpacity
            onPress={() => login(email, password)} // This should now be fine since email and password are strings
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
