import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView, Image, ScrollView } from 'react-native';

// console.log("INBOX", Inbox)

const Inbox = [
  {
    id: '1',
    userName: 'Jordan P',
    userImg: require("../../public/images/user1.jpeg"),
    messageTime: '4 mins ago',
    messageText:
      'Wanna see a movie together?',
  },
  {
    id: '2',
    userName: 'Yuti R',
    userImg: require("../../public/images/user2.jpeg"),
    messageTime: '2 hours ago',
    messageText:
      'I think my other friend and I are watching the Raps tonight. Want to come with us?',
  },
  {
    id: '3',
    userName: 'Eva B',
    userImg: require("../../public/images/user3.jpeg"),
    messageTime: '1 hours ago',
    messageText:
      'I might visit Toronto next week. We can go for a hike!',
  },
  {
    id: '4',
    userName: 'Adrian W',
    userImg: require("../../public/images/user4.jpeg"),
    messageTime: '1 day ago',
    messageText:
      'Let me know when you want to link up and take some pictures xx',
  },
  {
    id: '5',
    userName: 'Alexa J',
    userImg: require("../../public/images/user5.jpeg"),
    messageTime: '2 days ago',
    messageText:
      'Just finished reading the book you told me about. My mind is blown.',
  },
];

const Messages = () => {
  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
      <FlatList 
        data={Inbox}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View styles={styles.userCard}>
            <View styles={styles.userInfoCard}>
              <View styles={styles.userImgWrapper}>
                <Image source={item.userImg}/>
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
          )}
        />
       </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%'
  },
  scrollView: {
    marginHorizontal: 20
  },
  userCard: {
    width: '100%'
  },
  userInfoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userImgWrapper: {
    paddingTop: 15,
    paddingBottom:15
  },
  userImg: {
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