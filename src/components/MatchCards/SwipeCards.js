import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Interests from './Interests';
import MatchButtons from '../MatchButtons';
import Swiper from 'react-native-deck-swiper';


const users = [{"id":1,"first_name":"Jordan","last_name":"Peterson","email":"jpete@email.com","password":"password","date_of_birth":"1992-02-15T05:00:00.000Z","address":"Toronto","gender":"Non-Binary","about_me":"I love going out and making new friends!","starsign":"Aquarius","vaccinated":true},{"id":2,"first_name":"Yuti","last_name":"Reswick","email":"itsyuti@email.com","password":"password","date_of_birth":"1990-05-09T04:00:00.000Z","address":"Brampton","gender":"Male","about_me":"I live for the Raptors. Hit me up if you wanna shoot some hoops","starsign":"Taurus","vaccinated":true},{"id":3,"first_name":"Eva","last_name":"Bell","email":"evab@email.com","password":"password","date_of_birth":"1998-10-23T04:00:00.000Z","address":"Vancouver","gender":"Female","about_me":"I love to hike and go on adventures!","starsign":"Scorpio","vaccinated":true},{"id":4,"first_name":"Adrian","last_name":"Williams","email":"awills@email.com","password":"password","date_of_birth":"1994-03-19T05:00:00.000Z","address":"Toronto","gender":"Male","about_me":"Photography is my passion. Always down for a collab","starsign":"Pisces","vaccinated":false},{"id":5,"first_name":"Alexa","last_name":"Jones","email":"alexajones@email.com","password":"password","date_of_birth":"1986-09-12T04:00:00.000Z","address":"Scarborough","gender":"Undisclosed","about_me":"Always looking for book recommendations! Let me know what you are reading","starsign":"Virgo","vaccinated":true}];

const SwipeCards = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <Swiper
        cards={users}
        renderCard={Interests}
        infinite
        backgroundColor="white"
        cardHorizontalMargin={0}
        stackSize={2}
      />
      <MatchButtons/>
    </SafeAreaView>
  )
  
 
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    overflow: "hidden",
  },

});

export default SwipeCards;
