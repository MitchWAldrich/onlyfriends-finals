import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, Image, Linking, ActivityIndicator, Pressable } from 'react-native';
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
      <Text style={{alignContent: 'center', fontSize: 12}}>{hangoutSuggestion.action_text}</Text>
      <Pressable 
          title="Hangout Suggestion" 
          onPress={() => Linking.openURL(hangoutSuggestion.link)}
          style={styles.stylesButtonSuggestions}
        >
          <Text style={styles.stylesButtonSuggestionsText}>{hangoutSuggestion.interest}</Text>
      </Pressable>
    </View>
    )
  })

  const limitedSuggestions = interestSuggestions.slice(0, 4)

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

      <View styles={{marginTop: 7, marginBottom: 10}}>
        <Pressable 
          title="Send a Message" 
          onPress={() => {
            home()
            navigation.navigate('Messages')
          }}
          style={styles.stylesButtonMessage}
        >
          <Text style={styles.stylesButtonTextMessage}>Send a Message</Text>
        </Pressable>
        <Pressable 
          title="Find More Friends" 
          onPress={home}
          style={styles.stylesButtonFind}
        >
          <Text style={styles.stylesButtonTextFind}>Find More Friends</Text>
        </Pressable>
      </View>

      <View style={{marginTop: 5, justifyContent: 'center',}}>
        <View styles={{ color: '#004040', fontWeight: 'bold'}}>
          <Text>Suggested Best Friend Hangs</Text>
        </View>
        <View style={{flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center'}}>
          {limitedSuggestions}
        </View>
      </View>

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
    fontWeight: 'bold',
    color:'#004d4d',
  },
  text: {
    fontSize: 22,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'teal',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margintTop: 7,
    marginBottom: 7
  },
  photo: {
    width: 180,
    height: 180,
    borderRadius: '60%',
    overflow: 'hidden',
    margin: 5
  },
  stylesButtonMessage: { 
    alignSelf: "center",
    marginTop: 2,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 185,
    height: 45,
  },
  stylesButtonTextMessage: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 18,
    color: '#FFFFFF'
  },
  stylesButtonFind: { 
    alignSelf: "center",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 150,
    height: 35,
  },
  stylesButtonTextFind: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 13,
    color: '#FFFFFF'
  },
  stylesButtonSuggestions: { 
    marginTop: 2,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#004d4d',
    borderRadius: 90,
    width: 125,
    height: 25,
    alignSelf:'center',
    alignContent:'center',
    justifyContent: 'center',
  },
  stylesButtonSuggestionsText: {
    alignItems: 'center',
    alignSelf:'center',
    alignContent:'center',
    justifyContent: 'center',
    fontSize: 12,
    color: '#FFFFFF'
  },
});

export default SuperMatched;