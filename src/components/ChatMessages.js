import React, { useState, useEffect, useCallback, useContext } from 'react';

import { StyleSheet, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { StateContext } from '../../StateProvider.js';
import { renderComposer } from '../styles/ChatMessagesStyles.js';

import { fullConversation, fullUserObject } from '../../src/helpers/selectors.js';

import io from "socket.io-client";

const ChatMessages = (props) => {
  const { state, sendMessage, socket } = useContext(StateContext);
  const { user, users } = state;
  const { id } = props
  const otherUser = users.find(user => user.id === id);
  const conversation = fullConversation(state, user, otherUser).reverse();
  const [messages, setMessages] = useState([...conversation]);
  const fullSignedInUser = fullUserObject(state, user);

  // const appendOnSend = useCallback((msg = []) => {
  //   const finalMessage = {...msg[0], receiverID: id, matchID: conversation[0].id}
  //   sendMessage(finalMessage)
    
  //   socket.on("SEND_MESSAGE", msg => {
  //     console.log("Message received!")
  //     setMessages((prev) => GiftedChat.append({...prev, msg}))
  //   })
    
  //   return () => {
  //     socket.off("SEND_MESSAGE")
  //   }
  // }, []);

  const onSend = (msg) => {
    const finalMessage = {...msg[0], receiverID: otherUser.id, matchID: conversation[0]._id}
    console.log("FINAL MESSAGE: ", finalMessage)
    sendMessage(finalMessage)
  };
  
  useEffect(() => {
    socket.on("SEND_MESSAGE", msg => {
      console.log("Message received!")
      setMessages(prev => ([msg, ...prev]))
    })
      
    return () => {
      socket.off("SEND_MESSAGE")
    }
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={onSend}
        // onSend={messages => appendOnSend(messages)}
        user={{
          _id: user.id, 
          name: user.first_name,
          avatar: fullSignedInUser.photos[0],
        }}
        showUserAvatar={true}
        renderComposer={renderComposer}
        messagesContainerStyle={{ backgroundColor: '#F4F7F7' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: '100%',
    justifyContent: 'center'
  }
});

export default ChatMessages;