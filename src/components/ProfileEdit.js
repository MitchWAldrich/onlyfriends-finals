import React, { useState, Component, useEffect, useContext  } from "react";

import { StyleSheet, Text, TextInput, View, SafeAreaView, Image, ScrollView, Button, ActivityIndicator, Platform, Pressable } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, TextField, Checkbox } from '@material-ui/core';
import { useNavigation } from '@react-navigation/native';
import { allUserInterests, fullUserObject, userAge } from '../helpers/selectors.js';
import { StateContext } from '../../StateProvider.js';
import { remove, getData } from '../helpers/persistLogin.js';
import * as ImagePicker from 'expo-image-picker';
import editProfile from "../hooks/editProfile.js";

import axios from 'axios';

const ProfileEdit = (props) => {
  const { state, setState, loading} = useContext(StateContext);

  const detailedUser = fullUserObject({'users': state.users, 'interests': state.interests, 'photos': state.photos}, state.user)
  console.log('dUs', detailedUser)

  const userInterests = state.interests.find(obj => obj.user_id === state.user.id);
  
  const [gender, setGender] = useState({
    gender: detailedUser.gender,
  });
  
  console.log("GENDER VALUE: ",gender.gender);
  
  const handleGender = (event) => {
    setGender({...state, gender: event.target.value})
  }
  
  const [location, setLocation] = useState({
    address: detailedUser.address,
  });
  
  const handleLocation = (event) => {
    setLocation({...state, address: event.target.value})
  };
  
  const [vaxxed, setVaxxed] = useState({
    vaccinated: detailedUser.vaccinated,
  });
  console.log("VAX VALUE: ",vaxxed.vaccinated);
  
  const handleVaccinated = (event) => {
    setVaxxed({...state, vaccinated: event.target.value})
  }
  
  const [image, setImage] = useState({
    photo1: detailedUser.photos[0],
    photo2: detailedUser.photos[1],
    photo3: detailedUser.photos[2],
    photo4: detailedUser.photos[3],
  });
  
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    
    console.log(result);
    
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  
  const [aboutMe, setAboutMe] = useState({
    about_me: detailedUser.about_me,
  });
  
  const handleAboutMe = (event) => {
    setAboutMe({...state, about_me: event.target.value})
  }
  
  const [interests, setInterests] = useState({
    reading: userInterests.reading,
    tv_movies: userInterests.tv_movies,
    fitness: userInterests.fitness,
    hiking: userInterests.hiking,
    arts_culture: userInterests.arts_culture,
    music: userInterests.music,
    gaming: userInterests.gaming,
    travel: userInterests.travel,
    studying: userInterests.studying,
    sports: userInterests.sports,
    eating_out: userInterests.eating_out,
    going_out: userInterests.going_out
  });
  
  console.log("USER INTERESTS:", interests);

  const handleInterests = (event) => {
    setInterests({...state, interests: event.target.value})
  }

  const navigation = useNavigation(); 

  const onSaveProfile = () => {
    editProfile(state.user, gender, location, vaxxed, aboutMe, interests, image)
    setState({...state, user: state.user}) 
  };

  if (state.user) { 

    useEffect(() => {
      getData();
    }, [])

  return (
    <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>

      {/* DETAILS UNDER THIS SECTION CANNOT BE EDITED */}
        <View style={{ alignSelf: "center", marginTop: 10 }}>
          <View style={styles.profileImage}>
            <Image 
              source={{uri: detailedUser.photos[0]}} 
              style={styles.image} 
            />
          </View>
          <View style={{ alignSelf: "center" }}>
          {/* <Text style={styles.profileDetails}>{user.first_name}, {userAge(user)}</Text> */}
          <Text style={styles.profileDetails}>{detailedUser.first_name}, {userAge(detailedUser)}</Text>
            <Text style={styles.starSign}>{detailedUser.starsign} <MaterialCommunityIcons name={`zodiac-${detailedUser.starsign.toLowerCase()}`} color="black" /></Text>
          </View>
        </View>

    
        <View style={{flexDirection: 'row', justifyContent: 'center', alignContent: 'space-between'}}>
            <View style={{marginRight:5}}>
              <Pressable
                title="Save" onPress={() => {
                onSaveProfile()
                navigation.navigate('Profile')}
                } 
                style={styles.stylesButton}
              >
                <Text style={styles.stylesButtonText}>Save</Text>
              </Pressable>
            </View>
            <View style={{marginLeft:5}}>
              <Pressable 
                title="Cancel" 
                onPress={() => navigation.navigate('Profile')} 
                style={styles.stylesButton}
              >
                <Text style={styles.stylesButtonText}>Cancel</Text>
              </Pressable>
            </View>
        </View>


      {/* THIS IS WHERE THE EDITABLE TEXT INPUT BEGINS */}
          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup 
                  aria-label="gender" 
                  name="gender1" 
                  value={gender.gender}
                  onChange={handleGender} 
                >
                  <FormControlLabel value="Female" control={<Radio />} label="Female" />
                  <FormControlLabel value="Male" control={<Radio />} label="Male" />
                  <FormControlLabel value="Non-Binary" control={<Radio />} label="Non-Binary" />
                  <FormControlLabel value="Undisclosed" control={<Radio />} label="Undisclosed" />
                </RadioGroup>
              </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Location</FormLabel>
                <TextField 
                  id="standard-basic" 
                  value={location.address}
                  placeholder={location.address} 
                  onChange={handleLocation}
                />
              </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Vaccinated</FormLabel>
                <RadioGroup 
                  aria-label="vaccinated" 
                  name="vaccinated1" 
                  value={vaxxed.vaccinated}
                  onChange={handleVaccinated} 
                >
                  <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="No" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormLabel component="legend">Edit Photos</FormLabel>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Button title="+" onPress={pickImage} />
              {image && <Image source={{ uri: image.photo1 }} style={{ width: 200, height: 200 }} />}
              <Button title="+" onPress={pickImage} />
              {image && <Image source={{ uri: image.photo2 }} style={{ width: 200, height: 200 }} />}
              <Button title="+" onPress={pickImage} />
              {image && <Image source={{ uri: image.photo3 }} style={{ width: 200, height: 200 }} />}
              <Button title="+" onPress={pickImage} />
              {image && <Image source={{ uri: image.photo4 }} style={{ width: 200, height: 200 }} />}
            </View>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">About Me</FormLabel>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={8}
                  value={aboutMe.about_me}
                  placeholder={aboutMe.about_me}
                  onChange={handleAboutMe} 
                />
            </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
                <FormLabel component="legend">My Interests</FormLabel>
                    <FormControlLabel value={interests.reading} control={<Checkbox checked={interests.reading} onChange={event => setInterests({...interests, reading: event.target.checked})} name="Reading" />} label="Reading" />
                    <FormControlLabel value={interests.tv_movies} control={<Checkbox checked={interests.tv_movies} onChange={event => setInterests({...interests, tv_movies: event.target.checked}) } name="tv-movies" />} label="TV and Movies" />
                    <FormControlLabel value={interests.fitness} control={<Checkbox checked={interests.fitness} onChange={event => setInterests({...interests, fitness: event.target.checked}) } name="fitness" />} label="Fitness" />
                    <FormControlLabel value={interests.hiking} control={<Checkbox checked={interests.hiking} onChange={event => setInterests({...interests, hiking: event.target.checked}) } name="hiking" />} label="Hiking" />
                    <FormControlLabel value={interests.arts_culture} control={<Checkbox checked={interests.arts_culture} onChange={event => setInterests({...interests, arts_culture: event.target.checked}) } name="arts-culture" />} label="Arts and Culture" />
                    <FormControlLabel value={interests.music} control={<Checkbox checked={interests.music} onChange={event => setInterests({...interests, music: event.target.checked}) } name="music" />} label="Music" />
                    <FormControlLabel value={interests.gaming} control={<Checkbox checked={interests.gaming} onChange={event => setInterests({...interests, gaming: event.target.checked}) } name="gaming" />} label="Gaming" />
                    <FormControlLabel value={interests.travel} control={<Checkbox checked={interests.travel} onChange={event => setInterests({...interests, travel: event.target.checked}) } name="travel" />} label="Travel" />
                    <FormControlLabel value={interests.studying}  control={<Checkbox checked={interests.studying} onChange={event => setInterests({...interests, studying: event.target.checked}) } name="studying" />} label="Studying and Coworking" />
                    <FormControlLabel value={interests.sports} control={<Checkbox checked={interests.sports} onChange={event => setInterests({...interests, sports: event.target.checked}) } name="sports" />} label="Sports" />
                    <FormControlLabel value={interests.eating_out} control={<Checkbox checked={interests.eating_out} onChange={event => setInterests({...interests, eating_out: event.target.checked}) } name="eating-out" />} label="Eating Out" />
                    <FormControlLabel value={interests.going_out} control={<Checkbox checked={interests.going_out} onChange={event => setInterests({...interests, going_out: event.target.checked}) } name="going-out" />} label="Going Out" />
              </FormControl>
          </View>
       </ScrollView>
    </SafeAreaView>
  );
  
  } else {
    return (
      <View >
        <ActivityIndicator 
          size="large"
          loading={loading}
        />
      </View>
    )
  }
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
  textArea: {
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    flexWrap: 'wrap'
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginLeft: 5
  },
  checkbox: {
    alignSelf: "center"
  },
  aboutMePhotos: {
    width: 125,
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  stylesButton: { 
    alignSelf: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 5,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#003333',
    borderRadius: 90,
    width: 110,
    height: 40,
    color: '#FFFFFF'
  },
  stylesButtonText: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    color: '#FFFFFF'
  },
});

export default ProfileEdit;