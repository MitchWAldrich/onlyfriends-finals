import React from 'react';
import { View, Text } from 'react-native';
import { Bubble } from 'react-native-gifted-chat';

export const renderBubble = (props) => {
  <Bubble
    {...props}
    containerStyle={{
      left: {
        borderColor: 'teal',
        borderWidth: 10
      },
      right: {},
    }}
  />
}