import React, {useState} from 'react';
import { SafeAreaView, Text, TextInput, Button, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SignUp() {

  const [state, setState] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>onlyFriends</Text>
      <View style={styles.form}>
        <Text>Create an account</Text>
        <TextInput
          placeholder="First Name"
          value={state.first_name}
          onChangeText={firstName => setState({...state, first_name: firstName})} />
        <TextInput
          placeholder="Last Name"
          value={state.last_name}
          onChangeText={lastName => setState({...state, last_name: lastName})} />
        <TextInput
          placeholder="Email"
          value={state.email}
          onChangeText={email => setState({...state, email: email})} />
        <TextInput
          secureTextEntry={true}
          placeholder="Password"
          value={state.password}
          onChangeText={password => setState({...state, password: password})} />
        <Button
          title="Sign up"
          onPress={() => Alert.alert('submit button pressed!')} />
      </View>
      <Text>
        Already have an account?
        <Button
        title="Login"
        onPress={() => navigation.navigate('Login')} />
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header: {
    fontSize: 35,
    fontWeight:'bold',
  },
  form: {
    fontSize: 30,
  }
});