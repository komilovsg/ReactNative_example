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
};

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const RegisterScreen: React.FC<Props> = ({navigation}) => {
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
          <TextInput
            placeholder="Name"
            style={{borderWidth: 1, width: '100%', padding: 5, borderRadius: 7}}
          />
          <TextInput
            placeholder="Email"
            style={{borderWidth: 1, width: '100%', padding: 5, borderRadius: 7}}
          />
          <TextInput
            placeholder="Password"
            style={{borderWidth: 1, width: '100%', padding: 5, borderRadius: 7}}
          />
          <TextInput
            placeholder="Phone number"
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
              Registration
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;
