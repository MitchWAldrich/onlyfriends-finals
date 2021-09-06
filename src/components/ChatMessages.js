import React, { useState, useEffect, useCallback, useContext } from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { StateContext } from '../../StateProvider.js';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { TypingAnimation } from 'react-native-typing-animation';
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

  console.log("CONVO: ", conversation)
  // useEffect(() => {
  //   setMessages([
  //     {
  //       _id: conversation.id,
  //       text: conversation.message,
  //       createdAt: new Date(),
  //       user: {
  //         _id: user.id, 
  //         name: user.first_name,
  //         avatar: fullSignedInUser.photos[0],
  //       },
  //     },
  //   ])
  // }, []);
  
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
        // console.log("msgGRAB:", msg)
        console.log("Message received!")
        setMessages(prev => ([msg, ...prev]))
      })
      
      return () => {
        socket.off("SEND_MESSAGE")
      }
  }, [])

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
        alwaysShowSend={true}
        // renderLoadEarlier={conversation}
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
  },
  chatBubble: {
    backgroundColor: '#3777f0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  chatText: {
    color: '#FFFFFF'
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textArea: { 
    height: 40,
    width:'85%', 
    borderRadius:5,
    borderColor: '#808080'
  }
});

export default ChatMessages;