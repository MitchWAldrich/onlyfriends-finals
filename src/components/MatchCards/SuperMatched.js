import React from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const SuperMatched = (props) => {
  const { home, detailedUser, user } = props;
  
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>You're now BEST friends!</Text>
      <Text style={styles.text}>You and {detailedUser.first_name} are besties</Text>
      <View style={styles.imageContainer}>
        <Image 
          source={{uri: user.photos[0]}}
          style={styles.photo} 
        />
        <Image 
          source={{uri: detailedUser.photos[0]}}
          style={styles.photo} 
        />
      </View>
      <Button title="Go on a hike" onPress={() => Linking.openURL('https://greatruns.com/toronto-toronto-beltline-trail/')} /> 
      <Button title="Send a Message" onPress={() => {
        home()
        navigation.navigate('Messages')}} />
      <Button title="Find More Friends" onPress={home} />
    </SafeAreaView>
  )
};


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    color: 'teal',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'teal',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: '50%',
    overflow: 'hidden',
  }
});

export default SuperMatched;