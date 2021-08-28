import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";


export default function LoginForm() {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <View>
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
    </View>
  )
}