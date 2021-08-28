import React, { useState } from "react";
import { SafeAreaView, TextInput, Button, Alert, StyleSheet } from "react-native";


export default function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail} />
      <TextInput
        secureTextEntry={true}
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword}/>
      <Button
        title="Login"
        onPress={() => Alert.alert('Login button pressed')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});