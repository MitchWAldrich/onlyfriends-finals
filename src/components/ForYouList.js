import React from "react";
import { StyleSheet, View, Text, PushNotificationIOS, ScrollView } from "react-native";
import ForYouListItem from './ForYouListItem';

const ForYouList = (props) => {

  const parsedDFUs = props.detailedFilteredUsers.map( (user, index) => 
    <ForYouListItem
      key={index}
      id={user.id}
      photo={user.photos[0]}
      name={user.first_name}
      age={user.age}
      gender={user.gender}
      user={user}
    />
    )
   
  return (
    <ScrollView horizontal>
    <View style={styles.list}>
      <Text>Future friends who like <Text style={styles.category}>{props.category}</Text></Text>
      <View style={styles.listitems}>{parsedDFUs}</View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 100,
    backgroundColor: 'teal'
  },
  footer: {
    height: 100,
    backgroundColor: 'teal'
  },
  buttons: {
    height: 75,
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    height: 75,
    fontSize: 35,
    fontWeight: 'bold',
    justifyContent: "flex-end",
    margin: -20
  },
  list: {
    flexDirection: 'column',
    padding: 10
  },
  listitems: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  category: {
    fontWeight: 'bold'
  }
});

export default ForYouList;