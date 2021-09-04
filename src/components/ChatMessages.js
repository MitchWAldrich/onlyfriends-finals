import React, { useState, useEffect, useCallback, useContext } from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import { StateContext } from '../../StateProvider.js';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { fullConversation } from '../../src/helpers/selectors.js';
import io from "socket.io-client";


const ChatMessages = (props) => {
  const { state, sendMessage, socket } = useContext(StateContext);
  const { user, users } = state;
  const [messages, setMessages] = useState([]);
  const { id } = props
  // console.log('STATE: ', state)
  const otherUser = users.find(user => user.id === id);

  const conversation = fullConversation(state, user, otherUser);

  console.log('CONVERSATION: ', conversation);

  const onSend = (msg) => {
    console.log("PROPS ID:", id)
    console.log("msgONE:", msg)

    const finalMessage = {...msg[0], receiverID: id, matchID: conversation[0].id}
    console.log("finalMessage: ", finalMessage)
    console.log("MATCHID: ", conversation[0].id)
    sendMessage(finalMessage)
  };

  useEffect(() => {
      socket.on("SEND_MESSAGE", msg => {
        console.log("Message received!")
        console.log("msgGRAB:", msg)
        setMessages(prev => ([...prev, msg]))
      })
      
      return () => {
        socket.off("SEND_MESSAGE")
      }
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#d3d3d3',
          },
        }}
      />
    )
  }
  
  return (
    <View style={styles.container}>
      {/* <View>{messageHistory}</View> */}
      <GiftedChat
        messages={messages}
        onSend={onSend}
        user={{_id: user.id, name: user.first_name}}
        renderBubble={renderBubble}
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
    orderWidth: 1,
    borderRadius:5,
    borderColor: '#808080'
  }
});

export default ChatMessages;