import React, { useState, useCallback } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onInputChange = (value, setState) => {
    setState(value);
  }
  return (
    <View>
      <View>
        <TextInput
          
          placeholder="Enter your email here.."
          value={email}
          onChangeText={(value) => onInputChange(value, setEmail)}
        />
        <TextInput
         
          secureTextEntry={true}
          placeholder="Enter your password here.."
          value={password}
          onChangeText={(value) => onInputChange(value, setPassword)}
        />

      </View>
    </View>
  )
}