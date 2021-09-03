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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.messagesContainer}>
        <FlatList
          data={inbox}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('Chat', { userName: item.userName })}>
              <View styles={styles.userCard}>
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
              </View>
            </TouchableOpacity>
          )}
        />

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%',
    paddingTop: 10,
    paddingLeft: 10
  },
  messagesContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userCard: {
    width: '100%'
  },
  userInfoCard: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom: 15
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