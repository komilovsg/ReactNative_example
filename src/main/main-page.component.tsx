import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Button, Alert} from 'react-native';
import {useStyles} from './main-page.styles';
import {
  Passkey,
  PasskeyCreateResult,
  PasskeyGetResult,
} from 'react-native-passkey';

export const MainPage = () => {
  const styles = useStyles();
  const [email, setEmail] = useState('');

  async function fetchChallenge(endpoint: string): Promise<any> {
    try {
      const response = await fetch(
        `http://localhost:3000${endpoint}?email=${email}`,
      );
      if (!response.ok) throw new Error('Failed to fetch challenge');
      return response.json();
    } catch (error) {
      console.error('Error fetching challenge:', error);
      throw error;
    }
  }

  async function registerPasskey() {
    try {
      const options = await fetchChallenge('/api/challenge');

      const response: PasskeyCreateResult = await Passkey.create({
        challenge: options.challenge,
        user: {
          id: email,
          name: email,
          displayName: email,
        },
        rp: {
          id: 'localhost',
          name: 'Passkey Example App',
        },
        pubKeyCredParams: [],
      });

      const validationResponse = await fetch(
        'http://localhost:3000/api/passkey/register',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(response),
        },
      );

      const result = await validationResponse.json();
      if (result.status === 'success') {
        Alert.alert('Success', 'Passkey registered successfully!');
      } else {
        Alert.alert('Error', 'Failed to register passkey.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('Error', 'Failed to register passkey.');
    }
  }

  async function authenticateWithPasskey() {
    try {
      const options = await fetchChallenge('/api/challenge/login');

      const response: PasskeyGetResult = await Passkey.get({
        challenge: options.challenge,
        rpId: 'localhost',
      });

      const validationResponse = await fetch(
        'http://localhost:3000/api/passkey/authenticate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(response),
        },
      );

      const result = await validationResponse.json();
      if (result.status === 'success') {
        Alert.alert('Success', 'You are authenticated!');
      } else {
        Alert.alert('Error', 'Authentication failed.');
      }
    } catch (error) {
      console.error('Failed to authenticate:', error);
      Alert.alert('Error', 'Authentication failed.');
    }
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.headerText}>Passkey Example</Text>
      <Text style={styles.headerTitle}>Secure Authentication</Text>

      <View style={styles.viewContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType="email-address"
          placeholder="Enter Your Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Register" onPress={registerPasskey} />
        <Button title="Login" onPress={authenticateWithPasskey} />
      </View>
    </SafeAreaView>
  );
};
