import React from 'react';
import { TextInput, StyleSheet, Text, View, Button } from 'react-native';
import io from "socket.io-client";
import { Feather } from '@expo/vector-icons';

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

    this.socket.connect()
  }

  submitChatMessage() {
    console.log("submitChatMessage", this.socket.connected)
    this.socket.emit("chat message", this.state.chatMessage);
    this.setState({ chatMessage: "" });
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
            style={{ height: 40, width:'85%', borderWidth: 3, borderRadius:10, top: 600 }}
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
  }
});

export default ChatMessages;