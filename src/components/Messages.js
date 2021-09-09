import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, ActivityIndicator } from 'react-native';
import { StateContext } from '../../StateProvider.js';
import { useNavigation } from '@react-navigation/native';
import { inboxObjects, findMatchesByUser } from '../../src/helpers/selectors.js';
import { InboxContainer, MessageCard, UserImg, UserImgGroup, TextSection, UserInfoCard, UserInfoText, MessageText, UserName, PostTime, NewMatches, NewMatchContainer, NewUserInfoCard, NoMessageMatches, YesMessageMatches, NoMessageHeader, YesMessageHeader, NoMessageContainer, YesMessageContainer } from '../styles/MessagesStyles.js';
import showMatchedUsers from  '../../src/hooks/showMatchedUsers';
import Moment from 'react-moment';
import {useFonts, Roboto_400Regular } from '@expo-google-fonts/roboto';


const Messages = () => {
  const {newState, setNewState} = showMatchedUsers();
  const [loading, setLoading] = useState(false);
  
  // VERY IMPORTANT TO RENDER NEW MATCHES TO INBOX(MESSAGES SCREEN)
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
  const { state } = useContext(StateContext);
  const { user } = state;

  console.log("STATE: ", newState)
  
  const inbox = inboxObjects(newState, user);
  const newMatches = findMatchesByUser(newState, user);
  console.log('inbox', inbox)
  let checkValues;
  let withMessages = [];
  let withoutMessages = [];

  for (const match of inbox ) {
    // checkValues = Object.values(match)
    // console.log('vals', checkValues)
    if (match.messageText === null) {
      withoutMessages.push(match)
    } else {
      withMessages.push(match)
    }
  }
  console.log('with', withMessages)
  console.log('without', withoutMessages)

  // const dateFormat = () => {
  //   const messageSentAt = inboxObjects.messageTime;

  //   return (
  //     <Moment fromNow>{messageSentAt}</Moment>
  //   )
  // }
      

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
      <NoMessageContainer>
        <NoMessageHeader>Don't keep your new friend waiting</NoMessageHeader>
          <FlatList
            horizontal={true}
            data={withoutMessages}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                  // item.messageText === null ?
              <NoMessageMatches onPress={() => navigation.navigate('Chat', { userName: item.userName, id: item.id, matchID:item.matchID  })}>
                <UserImgGroup>
                  <UserImg source={item.userImg}/>
                </UserImgGroup>
              </NoMessageMatches>
            )}
          />
      </NoMessageContainer>
                  {/* // :
                  // <MessageCard onPress={() => navigation.navigate('Chat', { userName: item.userName, id:item.id, matchID:item.matchID })}>
                  //     <UserInfoCard>
                  //       <UserImgGroup>
                  //         <UserImg source={item.userImg}/>
                  //       </UserImgGroup>
                  //       <TextSection>
                  //         <UserInfoText>
                  //           <UserName>{item.userName}</UserName>
                  //           <PostTime>{item.messageTime}</PostTime>
                  //         </UserInfoText>
                  //         <MessageText>{item.messageText}</MessageText>
                  //       </TextSection>
                  //     </UserInfoCard>
                  // </MessageCard>
              )}
            /></InboxContainer> */}
          
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
      
        <YesMessageContainer>
          <YesMessageHeader>Keep the conversation going</YesMessageHeader>
            <FlatList
              data={withMessages}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                  // item.messageText === null ?
                  //     horizontal={true}
                  // <NewMatches onPress={() => navigation.navigate('Chat', { userName: item.userName, id: item.id, matchID:item.matchID  })}>
                  //       <NewUserInfoCard>
                  //         <UserImgGroup>
                  //           <UserImg source={item.userImg}/>
                  //         </UserImgGroup>
                  //       </NewUserInfoCard>
                  //   </NewMatches>
                  //   :
                <YesMessageMatches>
                  <MessageCard onPress={() => navigation.navigate  ('Chat', { userName: item.userName, id:item.id,   matchID:item.matchID })}>
                    <UserInfoCard>
                      <UserImgGroup>
                        <UserImg source={item.userImg}/>
                      </UserImgGroup>
                      <TextSection>
                        <UserInfoText>
                          <UserName>{item.userName}</UserName>
                          <PostTime><Moment fromNow>{item.messageTime}</Moment></PostTime>
                        </UserInfoText>
                        <MessageText>{item.messageText}</MessageText>
                      </TextSection>
                    </UserInfoCard>
                  </MessageCard>
                </YesMessageMatches>
              )}
              />
          </YesMessageContainer>
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
  }
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