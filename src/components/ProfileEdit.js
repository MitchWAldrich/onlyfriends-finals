import React, { useState, Component, useEffect, useContext  } from "react";

import { StyleSheet, Text,TextInput, View, SafeAreaView, Image, ScrollView, Button, ActivityIndicator, CheckBox  } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Chip, Radio, RadioGroup, FormControl, FormControlLabel, FormLabel, TextField, Checkbox } from '@material-ui/core';
import { useNavigation } from '@react-navigation/native';
import { allUserInterests, fullUserObject, userAge } from '../helpers/selectors.js';
import { StateContext } from '../../StateProvider.js';
import { remove, getData } from '../helpers/persistLogin.js';

import axios from 'axios';

const ProfileEdit = (props) => {
  const { state, setState, loading} = useContext(StateContext);

  const detailedUser = fullUserObject({'users': state.users, 'interests': state.interests, 'photos': state.photos}, state.user)
  console.log('dUs', detailedUser)

  const userInterests = state.interests.find(obj => obj.user_id === state.user.id);
  console.log("USER INTERESTS:", userInterests);
  
  const [value, onChangeValue] = useState({
    gender: detailedUser.gender,
    address: detailedUser.address,
    // vaccinated: detailedUser.vaccinated,
    about_me: detailedUser.about_me,
  });
  
  console.log("GENDER VALUE: ",value.gender);
  
  const handleGender = (event) => {
    onChangeValue({...state, gender: event.target.value})
  }
  
  const [vaxxed, setVaxxed] = useState({
    vaccinated: detailedUser.vaccinated,
  });
  console.log("VAX VALUE: ",vaxxed.vaccinated);

  const handleVaccinated = (event) => {
    setVaxxed({...state, vaccinated: event.target.value})
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
  
  const handleInterests = (event) => {
    setInterests({...state, interests: event.target.value})
  }

  // const [interests, setInterests] = useState([
  //   {key: 0, label:'Reading'},
  //   {key: 1, label:'TV and Movies'},
  //   {key: 2, label:'Fitness'},
  //   {key: 3, label:'Hiking'},
  //   {key: 4, label:'Arts and Culture'},
  //   {key: 5, label:'Music'},
  //   {key: 6, label:'Gaming'},
  //   {key: 7, label:'Travel'},
  //   {key: 8, label:'Studying & Co-working'},
  //   {key: 9, label:'Sports'},
  //   {key: 10, label:'Eating Out'},
  //   {key: 11, label:'Going Out'}
  // ]);

  // const handleClick = (interestToClick) => {
  //   setInterests(interests => interests.filter(interest => interest.key === interestToClick))
  // };

  const [photos, setPhotos] = useState({
    photo1: detailedUser.photos[0],
    photo2: detailedUser.photos[1],
    photo3: detailedUser.photos[2],
    photo4: detailedUser.photos[3]
  });

  const navigation = useNavigation(); 

  if (state.user) { 

    // const allInterests = state.interests.map((data) => {
    //   <Chip
    //     key={data.key}
    //     label={data.label}
    //     onClick={handleClick(data)}
    //     clickable={true}
    //     color="primary"
    //   />
    // })     
    
    // const userInterests = detailedUser.interests.map((interest, id) =>
    //   <Chip
    //     key={id}
    //     label={interest}
    //     clickable
    //     color="primary"
    //     onClick={() => console.log('I BEEN PRESSED!')}
    //   />)

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

    
        <View style={styles.buttonSaveCancel}>
            <View style={{marginRight:5}}>
              <Button title="Save" onPress={() => navigation.navigate('Profile')} style={styles.editButton}/>
            </View>
            <View style={{marginLeft:5}}>
              <Button title="Cancel" onPress={() => navigation.navigate('Profile')} style={styles.editButton}/>
            </View>
        </View>


      {/* THIS IS WHERE THE EDITABLE TEXT INPUT BEGINS */}
          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup 
                  aria-label="gender" 
                  name="gender1" 
                  value={value.gender}
                  onChange={handleGender} 
                >
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="non-binary" control={<Radio />} label="Non-Binary" />
                  <FormControlLabel value="undisclosed" control={<Radio />} label="Undisclosed" />
                </RadioGroup>
              </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Location</FormLabel>
                <TextField id="standard-basic" value={state.address} />
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
                  <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormLabel component="legend">Edit Photos</FormLabel>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
              <FormLabel component="legend">About Me</FormLabel>
                <TextField
                  id="outlined-multiline-flexible"
                  multiline
                  maxRows={8}
                  value={state.about_me}
                  onClick={() => console.log('I BEEN PRESSED!')}
                />
            </FormControl>
          </View>

          <View style={styles.textArea}>
            <FormControl component="fieldset">
                <FormLabel component="legend">My Interests</FormLabel>
                  {/* <RadioGroup 
                    aria-label="my-interests" 
                    name="my-interests1" 
                    value={value} 
                    onClick={() => console.log('I BEEN PRESSED!')} 
                  > */}
                    {/* checked={value inside is the value we want} */}
                    <FormControlLabel value="reading" control={<Checkbox checked={interests.reading} onChange={handleInterests} name="reading" />} label="Reading" />
                    <FormControlLabel value="tv-movies" control={<Checkbox checked={interests.tv_movies} onChange={handleInterests} name="tv-movies" />} label="TV and Movies" />
                    <FormControlLabel value="fitness" control={<Checkbox checked={interests.fitness} onChange={handleInterests} name="fitness" />} label="Fitness" />
                    <FormControlLabel value="hiking" control={<Checkbox checked={interests.hikinh} onChange={handleInterests} name="hiking" />} label="Hiking" />
                    <FormControlLabel value="arts-culture" control={<Checkbox checked={interests.arts_culture} onChange={handleInterests} name="arts-culture" />} label="Arts and Culture" />
                    <FormControlLabel value="music" control={<Checkbox checked={interests.music} onChange={handleInterests} name="music" />} label="Music" />
                    <FormControlLabel value="gaming" control={<Checkbox checked={interests.gaming} onChange={handleInterests} name="gaming" />} label="Gaming" />
                    <FormControlLabel value="travel" control={<Checkbox checked={interests.travel} onChange={handleInterests} name="travel" />} label="Travel" />
                    <FormControlLabel value="studying-coworking" control={<Checkbox checked={interests.studying} onChange={handleInterests} name="studying" />} label="Studying and Coworking" />
                    <FormControlLabel value="sports" control={<Checkbox checked={interests.sports} onChange={handleInterests} name="sports" />} label="Sports" />
                    <FormControlLabel value="eating-out" control={<Checkbox checked={interests.eating_out} onChange={handleInterests} name="eating-out" />} label="Eating Out" />
                    <FormControlLabel value="going-out" control={<Checkbox checked={interests.going_out} onChange={handleInterests} name="going-out" />} label="Going Out" />
              </FormControl>
            <Text></Text>
            {/* <View>{allUserInterests}</View> */}
            
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
  buttonSaveCancel: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 10,
  },
  aboutMePhotos: {
    width: 125,
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default ProfileEdit;