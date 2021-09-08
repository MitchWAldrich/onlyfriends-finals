import styled from 'styled-components/native';
import {useFonts, Roboto_400Regular, Puritan_400Regular } from '@expo-google-fonts/roboto';
import * as Font from 'expo-font';


  // let [fontsLoaded] = useFonts({
  //   Roboto_400Regular,
  //   Puritan_400Regular
  // })


export const InboxContainer = styled.SafeAreaView`
display: flex;  
flex: 1;
  padding-left: 15px;
  padding-right: 0px;
  width:100%;
  flex-direction: column;
`;

export const NoMessageMatches = styled.View`

justify-content: flex-start;
  width: 90%;
  
  margin-left: 5px;
  margin-bottom: 10px;
  margin-right: 5px;

  border-bottom-width: 1px;
  border-bottom-color: #color: #004D4D;;
`;

export const NoMessageHeader = styled.Text`
margin-top: 5px;
font-size: 16px;
font-family: Puritan_400Regular;
`;

export const YesMessageMatches = styled.View`

justify-content: flex-start;
  width: 90%;
  margin-left: 5px;
  
`;

export const YesMessageHeader = styled.Text`
margin-top: 5px;
margin-bottom: 5px;
font-size: 16px;
font-family: Puritan_400Regular;
`;

export const NewUserInfoCard = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #004D4D;
`;

export const NewUserImgGroup = styled.View`
padding-top: 15px;
padding-bottom: 15px;
`;


export const MessageCard = styled.TouchableOpacity`
  width: 90%;
  margin-left: 25px;
  margin-right: 15px;
`;

export const UserInfoCard = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  align-items: center;
`;

export const UserImgGroup = styled.View`
  padding-top: 5px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  align-self: center;
`;

export const UserImg = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const TextSection = styled.View`
  flex-direction: column;
  justify-content: center;
  padding: 5px;
  padding-left: 0;
  margin-left: 15px;
  margin-right: 5px;
  width: 90%;
  border-top-width: 1px;
  border-top-color: #004D4D;
  border-bottom-width: 1px;
  border-bottom-color: #004D4D;
`;

export const UserInfoText = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  font-weight: bold;
`;

export const PostTime = styled.Text`
  font-size: 12px;
  color: #666;
  margin-left: 5px;
`;

export const MessageText = styled.Text`
  font-size: 14px;
  font-family: Roboto_400Regular;
  color: #333333;
`;
