import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { StateContext } from '../../StateProvider.js';
import { useNavigation } from '@react-navigation/native';
import { inboxObjects, findMatchesByUser } from '../../src/helpers/selectors.js';
import { InboxContainer, MessageCard, UserImg, UserImgGroup, TextSection, UserInfoCard, UserInfoText, MessageText, UserName, PostTime, NewMatches, NewMatchContainer, NewUserInfoCard } from '../styles/MessagesStyles.js';


const Messages = () => {
  
  const navigation = useNavigation();
  
  const { state } = useContext(StateContext);
  const { user } = state;
  const inbox = inboxObjects(state, user);
  const newMatches = findMatchesByUser(state, user);

  console.log("NEW MATCHES: ", newMatches);

  console.log("STATE: ", state)
  
  return (
    <InboxContainer>
      {/* <NewMatchContainer>
        <FlatList
          data={inbox}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <NewMatches onPress={() => navigation.navigate('Chat', { userName: item.userName, id: item.id, matchID:item.matchID  })}>
                <NewUserInfoCard>
                  <UserImgGroup>
                    <UserImg source={item.userImg}/>
                  </UserImgGroup>
                </NewUserInfoCard>
            </NewMatches>
          )}
        />
      </NewMatchContainer> */}

      <View style={styles.container}>
        <FlatList
          data={inbox}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            item.messageText === null ?
              <NewMatches onPress={() => navigation.navigate('Chat', { userName: item.userName, id: item.id, matchID:item.matchID  })}>
                  <NewUserInfoCard>
                    <UserImgGroup>
                      <UserImg source={item.userImg}/>
                    </UserImgGroup>
                  </NewUserInfoCard>
              </NewMatches>
              :
              <MessageCard onPress={() => navigation.navigate('Chat', { userName: item.userName, id:item.id, matchID:item.matchID })}>
                  <UserInfoCard>
                    <UserImgGroup>
                      <UserImg source={item.userImg}/>
                    </UserImgGroup>
                    <TextSection>
                      <UserInfoText>
                        <UserName>{item.userName}</UserName>
                        <PostTime>{item.messageTime}</PostTime>
                      </UserInfoText>
                      <MessageText>{item.messageText}</MessageText>
                    </TextSection>
                  </UserInfoCard>
              </MessageCard>
          )}
        />
      </View>
    </InboxContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
});
//   item: {
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   newMatchContainer: {
//     flex: 1,
//     width: '100%',
//     flexDirection: 'row',
//     marginLeft: 20,
//     marginRight: 20
//   },
//   messagesContainer: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     marginLeft: 20,
//     marginRight: 20
//   },
//   userCard: {
//     width: '100%'
//   },
//   userInfoCard: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
    
//   },
//   userImgWrapper: {
//     marginLeft: 15,
//     marginRight: 15,
//   },
//   userAvatar: {
//     width: 50,
//     height: 50,
//     borderRadius: 25
//   },
//   textSection: {
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 15,
//     paddingLeft: 0,
//     marginLeft: 10,
//     width: 300,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC'
//   },
//   userInfoText: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 5
//   },
//   userName: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   messageSent: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     fontFamily: 'Lato-Regular'
//   },
//   messageSent: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   }
// });




export default Messages;