import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Button} from 'react-native';
import {useStyles} from './main-page.styles';

export const MainPage = () => {
  // Состояние для переключения между регистрацией и логином
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const styles = useStyles();

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
