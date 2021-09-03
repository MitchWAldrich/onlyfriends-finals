import React from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import io from "socket.io-client";
import axios from "axios";

class ChatMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: "",
      allChatMessages: []
    };
  }

  componentDidMount() {
    console.log("Component mounted.")
    this.socket = io("http://127.0.0.1:3000", {transports: ['websocket']});
    // 127.0.0.1 -- Change it to your own IP address, can be found through ifconfig for MacOS, ipconfig for Windows

    this.socket.on("connect_error", (error) => {
      console.log("Error:", error)
    })

    this.socket.on("chat message", msg => {
      // console.log("MSG:", msg)
      this.setState({ allChatMessages: [...this.state.allChatMessages, msg] });
    });

    // add an axios get to get the messages within a chat (match) -- figure out how to implement with sockets because of the delay

    this.socket.connect()
  }

  



  submitChatMessage() {
    console.log("submitChatMessage", this.socket.connected)
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
    
    let messageObj = { matchID, senderID, receiverID, message, sentAt };
    // let messageObj = { matchID: 1, senderID: 1, receiverID: 2, message: "hi hello", sentAt: "2021-08-19T14:23:54.000Z" };

    // {
    //   _id: 2,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 1,
    //     name: 'React Native',
    //     avatar: 'https://placeimg.com/140/140/any',
    //   },
    // },


    axios.post('http://localhost:8001/api/messages', messageObj).then(response => {
      this.setState({ allChatMessages: [...this.state.allChatMessages, messageObj] })
    })
    .catch((err) => {
      console.log("Error on axios post: ", err)
    })
  }

  render() {
    const allChatMessages = this.state.allChatMessages.map(chatMessage => (
      <Text key={chatMessage}>{chatMessage}</Text>
    ));

    return (
      <View style={styles.container}>
        <View style={styles.chatBubble}>
          <View style={styles.chatText}>{allChatMessages}</View>
        </View>
        <View style={styles.messageContainer}>
          <TextInput
            style={styles.textArea}
            autoCorrect={true}
            placeholder="Say Something..."
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={chatMessage => {
              this.setState({ chatMessage });
            }}
          />
          <Button title="send" onPress={()=>{
            this.submitChatMessage('Button',"button");
          }}/>
        </View>
      </View>
    );
  }
};

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