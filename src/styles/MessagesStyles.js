import styled from 'styled-components/native';

export const InboxContainer = styled.SafeAreaView`
  flex: 1;
  padding-left: 15px;
  padding-right: 20px;
  align-items: center;
  background-color: #FFFFFF;
  width:100%;
`;

export const NewMatches = styled.TouchableOpacity`
  width: 90%;
  margin-left: 25px;
  margin-right: 25px;
`;

export const NewUserInfoCard = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
`;

export const NewUserImgGroup = styled.View`
padding-top: 15px;
padding-bottom: 15px;
`;


export const MessageCard = styled.TouchableOpacity`
  width: 90%;
  margin-left: 25px;
  margin-right: 25px;
`;

export const UserInfoCard = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
`;

export const UserImgGroup = styled.View`
  padding-top: 15px;
  padding-bottom: 15px;
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
  margin-right: 15px;
  width: 95%;
  border-bottom-width: 1px;
  border-bottom-color: #cccccc;
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
  color: #333333;
`;
