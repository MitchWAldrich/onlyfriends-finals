import React, { useEffect, useContext } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { suggestedUser, getData } from "../helpers/persistsSuggestedUser";
import { StateContext } from "../../StateProvider";


const ForYouListItem = (props, {navigation}) => {  
  const { state, setState } = useContext(StateContext)

  navigation = useNavigation();  

  const onPress = async () => {
    suggestedUser(props.user)
    getData(state, setState)
    // console.log('parasedUser1', parsedUser)
    return
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View style={styles.item}>
      <Pressable onPress={() => {
        onPress()
        navigation.navigate('Main')
      }
      }>
        <Image
        source={{uri: props.photo}}
        style={{width: 100, height: 100, borderRadius: 25}}
        />
      </Pressable>
      <Text>{props.name}, {props.age}</Text>
      <Text>{props.gender}</Text>
    </View>
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
  item: {
    padding: 5
  }
});

export default ForYouListItem;