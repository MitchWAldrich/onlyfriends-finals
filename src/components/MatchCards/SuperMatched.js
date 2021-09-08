import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, Linking, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getMutualInterests, updateUser, getHangoutsObjectByInterest, interestStringManipulation } from '../..//helpers/selectors';
import showMatchedUsers from '../..//hooks/showMatchedUsers';


const SuperMatched = (props) => {
  const { newState } = showMatchedUsers();
  const { home, detailedUser, user } = props;
  const [loading, setLoading] = useState(false);
  
  if (newState.users === null) {
    // setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    
    return (
      <View >
          <ActivityIndicator 
            size="large"
            loading={loading}
            />
        </View>
      )
    }
    
  
  const navigation = useNavigation();

  const newUser = updateUser(newState, user); 

  const mutualInterests = getMutualInterests(newState, newUser, detailedUser);

  const stringManipulatedInterests = interestStringManipulation(mutualInterests);

  const interestSuggestions = stringManipulatedInterests.map( interest => {
    const hangoutSuggestion = getHangoutsObjectByInterest(newState, interest);
    return (
    <View>
      <Text>{hangoutSuggestion.action_text}</Text>
      <Button title={hangoutSuggestion.interest} onPress={() => Linking.openURL(hangoutSuggestion.link)} />
    </View>
    )
  })

  const limitedSuggestions = interestSuggestions.slice(0, 3)

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
      <View>
        <Text>Suggested Best Friend Hangs</Text>
      {limitedSuggestions}
      </View>
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