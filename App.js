import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LoginForm } from './src/components/LoginForm';
import { Saludar } from './src/components/Saludar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Primera app en React NATIVE</Text>
      <Text>Primera app en React NATIVE</Text> */}
      {/* <Saludar firstname ="Alex" lastname="Calle Agudelo"/> */}
      <Saludar/>
      <LoginForm/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
