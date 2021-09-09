import React from "react";
import { StyleSheet, SafeAreaView, Text, ImageBackground, View, Pressable } from "react-native";
import { Chip, Grid } from '@material-ui/core'
import InterestTag from "./InterestTag";
import { AntDesign } from '@expo/vector-icons';


const Interests = (props) => {
  const {next, back, detailedUser } = props;

  const interests = ['reading', 'hiking', 'going out', 'eating out'];
  

  const parsedInterests = detailedUser.interests.map((interest) => {
    return (
      <Chip
        key={interest}
        label={interest}
        color="primary"
        style={{backgroundColor:'#005a5a', width: 108, marginBottom: 5, color: '#FFFFFF', opacity: .85, fontSize: 12, fontWeight: 'bold'}}
      />
      // <InterestTag interest={interest} key={interest}/>)
    )
  })


  return (
    
      <SafeAreaView style={styles.card}>
        <ImageBackground source={{uri: detailedUser.photos[2]}} style={styles.image}>
          <Pressable onPress={back} style={styles.navigateLeft}>
          <AntDesign name="arrowleft" size={20} color="#d6d6d6" />
          </Pressable>
          <Pressable onPress={next} style={styles.navigateRight}>
          <AntDesign name="arrowright" size={20} color="#d6d6d6" />
          </Pressable>
          <View style={styles.innerText}>
            <Text style={styles.name}>{detailedUser.first_name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                style={{marginHorizontal: 5, marginVertical: 5}}
              >
                {parsedInterests}
              </Grid>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  
  card: {
    width: '90%',
    height: '80%',
    borderRadius: 10,
    backgroundColor: '#fefefe',
    alignItems: 'center',
    justifyContent: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    marginTop: 18,
  },
  navigateRight: {
    height: '100%',
    position: 'absolute',
    top: 300,
    right: 0,
  },
  navigateLeft: {
    height: '100%',
    position: 'absolute',
    top: 300,
    left: 0,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',

    justifyContent: 'flex-end',
  },
  innerText: {
    padding: 12,
  },
  name: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: '#525252',
    textShadowOffset: {
      width: 4,
      height: 5,
    },
    textShadowOpacity: 0.36,
    textShadowRadius: 6.68,
    marginBottom: 5
  },
  text: {
    fontSize: 20,
    color: 'white',
    lineHeight: 25,
    textShadowColor: '#525252',
    textShadowOffset: {
      width: 4,
      height: 5,
    },
    textShadowOpacity: 0.36,
    textShadowRadius: 6.68,
  },
});



export default Interests;