import { teal } from '@material-ui/core/colors';
import React from 'react';
import { Composer, Bubble, MessageText } from 'react-native-gifted-chat';

export const renderComposer = (props) => (
  <Composer
    {...props}
    textInputStyle={{
      color: '#222B45',
      backgroundColor: '#EDF1F7',
      borderWidth: 1,
      borderRadius: 5,
      height: 25,
      borderColor: '#E4E9F2',
      paddingTop: 8.5,
      paddingBottom: 8.5,
      paddingHorizontal: 12,
      marginLeft: 0,
    }}
  />
);

export const renderBubble = () => {

  return (
    <Bubble
      // renderTime={() => <Text>Time</Text>}
      // renderTicks={() => <Text>Ticks</Text>}
      containerStyle={{
        left: { borderColor: 'teal', borderWidth: 8, backgroundColor: 'teal', color: 'white' },
        right: {borderColor: 'pink', borderWidth: 8, backgroundColor: 'pink', color: 'white'},
      }}
      // textStyle={{
      //   left: {color: 'white'},
      //   right: {color: 'white'},
      // }}
      renderMessageText={() => {
        return (
          <MessageText
            textStyle={{
              left: { color: 'white' }, // Does not change dynamically
              right: { color: 'white' },
            }}
          />
        );
      }}
      // bottomContainerStyle={{
      //   left: { borderColor: 'purple', borderWidth: 4 },
      //   right: {},
      // }}
      // tickStyle={{}}

      // containerToNextStyle={{
      //   left: { borderColor: 'navy', borderWidth: 4 },
      //   right: {},
      // }}
      // containerToPreviousStyle={{
      //   left: { borderColor: 'mediumorchid', borderWidth: 4 },
      //   right: {},
      // }}

    //   wrapperStyle={{
    //     right: {
    //         backgroundColor: "teal",
    //         borderRadius: 30,
    //         borderBottomRightRadius: 30,
    //         marginBottom: 10,
    //         padding: 5,
    //         right: 15,
    //         justifyContent: "flex-end",
    //         alignSelf: 'stretch',
    //         marginLeft: 0,
    //         alignSelf: "center"
    //     },
    //     left: {
    //         backgroundColor: "green",
    //         borderRadius: 30,
    //         marginBottom: 20,
    //         padding: 5,
    //         left: -30
    //     }
    // }}
    />
  )
};