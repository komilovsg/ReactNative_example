import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  // Состояние для переключения между регистрацией и логином
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');

  const handleLoginPress = () => {
    setIsLogin(true);
  };

  const handleRegisterPress = () => {
    setIsLogin(false);
  };

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <Text style={styles.headerText}>Hello, it’s Test Project</Text>
      <Text style={styles.headerTitle}>Passkey Example</Text>

      <View style={styles.viewContainer}>
        {/* Кнопки для Login и Register */}
        {isLogin ? (
          <>
            <Button title="Login" onPress={handleLoginPress} color="#4CAF50" />
            <Text style={styles.orText}>or</Text>
            <Button
              title="Register"
              onPress={handleRegisterPress}
              color="#2196F3"
            />
          </>
        ) : (
          <>
            {/* Кнопки скрываются, когда мы в режиме регистрации */}
            <Button title="Login" onPress={handleLoginPress} color="#4CAF50" />
            <TextInput
              style={styles.textInput}
              placeholder="Enter Your Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <Button
              title="Register"
              onPress={handleRegisterPress}
              color="#2196F3"
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#777',
    marginBottom: 30,
  },
  viewContainer: {
    width: '80%',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  orText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginVertical: 15,
  },
});

export default App;
