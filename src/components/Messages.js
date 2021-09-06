import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { StateContext } from '../../StateProvider.js';
import { useNavigation } from '@react-navigation/native';
import { inboxObjects } from '../../src/helpers/selectors.js';


const Messages = () => {
  
  const navigation = useNavigation();
  
  const { state } = useContext(StateContext);
  const { user } = state;
  // console.log('state', state)
  const inbox = inboxObjects(state, user);
  console.log("INBOX:", inbox)

  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          contentContainerStyle={styles.messagesContainer}
          data={inbox}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { userName: item.userName, id:item.id, matchID:item.matchID })}>
                <View styles={styles.userInfoCard}>
                  <View styles={styles.userImgWrapper}>
                    <Image source={item.userImg} style={styles.userAvatar} />
                  </View>
                  <View styles={styles.textSection}>
                    <View styles={styles.userInfoText}>
                      <Text styles={styles.userName}>{item.userName}</Text>
                      <Text styles={styles.messageSent}>{item.messageTime}</Text>
                    </View>
                    <Text>{item.messageText}</Text>
                  </View>
                </View>
            </TouchableOpacity>
          )}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems:'center',
    backgroundColor: '#FFFFFF'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  messagesContainer: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingHorizontal: 10
  },
  userCard: {
    width: '100%'
  },
  userInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  userImgWrapper: {
    marginVertical: 15
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 15,
    paddingLeft: 0,
    marginLeft: 10,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC'
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  },
  messageSent: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  }
});




export default Messages;