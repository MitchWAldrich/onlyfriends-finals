import React from "react";

import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

const ProfileEdit = (props) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
       <View style={styles.buttonSaveCancel}>
          <View style={{ alignSelf: "center" }}>
            <Button title="Save" onPress={() => navigation.navigate('Profile')} style={styles.editButton}/>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button title="Cancel" onPress={() => navigation.navigate('Profile')} style={styles.editButton}/>
          </View>
        </View>
       </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    width: '100%'
  },
  scrollView: {
    marginHorizontal: 20,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D"
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden"
  },
  profileDetails: {
    paddingTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    color:'#2D2D2D'
  },
  starSign:{
    alignSelf: "center",
    fontSize: 15
  },  
  editButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  editButton: { 
    alignSelf: "center",
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#0087FF',
    borderRadius: 25,
    width: 'auto'
  },
  editButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  textArea: {
    marginLeft: 40,
    marginTop: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 5
  },
  checkbox: {
    alignSelf: "center"
  },
  buttonSaveCancel: {
    flexDirection: "row",
    alignSelf: "center"
  },
  aboutMePhotos: {
    width: 125,
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default ProfileEdit;