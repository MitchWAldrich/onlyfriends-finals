import React from 'react';
import { Composer, Bubble } from 'react-native-gifted-chat';

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

// export const renderBubble = (props) => {
//     <Bubble
//         {...props}
//         wrapperStyle={{
//           right: {
//             backgroundColor: '#2e64e5'
//           }
//         }}
//         textStyle={{
//           right: '#fff'
//         }}
//     />
//   }
