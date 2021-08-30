import React from 'react';
import {View, StyleSheet} from 'react-native';
import Name from './Name';
import MatchButtons from '../MatchButtons';

import AnimatedStack from './AnimatedStack';

const users = [{"id":1,"first_name":"Jordan","last_name":"Peterson","email":"jpete@email.com","password":"password","date_of_birth":"1992-02-15T05:00:00.000Z","address":"Toronto","gender":"Non-Binary","about_me":"I love going out and making new friends!","starsign":true,"vaccinated":true},{"id":2,"first_name":"Yuti","last_name":"Reswick","email":"itsyuti@email.com","password":"password","date_of_birth":"1990-05-09T04:00:00.000Z","address":"Brampton","gender":"Male","about_me":"I live for the Raptors. Hit me up if you wanna shoot some hoops","starsign":false,"vaccinated":true},{"id":3,"first_name":"Eva","last_name":"Bell","email":"evab@email.com","password":"password","date_of_birth":"1998-10-23T04:00:00.000Z","address":"Vancouver","gender":"Female","about_me":"I love to hike and go on adventures!","starsign":false,"vaccinated":true},{"id":4,"first_name":"Adrian","last_name":"Williams","email":"awills@email.com","password":"password","date_of_birth":"1994-03-19T05:00:00.000Z","address":"Toronto","gender":"Male","about_me":"Photography is my passion. Always down for a collab","starsign":true,"vaccinated":false},{"id":5,"first_name":"Alexa","last_name":"Jones","email":"alexajones@email.com","password":"password","date_of_birth":"1986-09-12T04:00:00.000Z","address":"Scarborough","gender":"Undisclosed","about_me":"Always looking for book recommendations! Let me know what you are reading","starsign":false,"vaccinated":true}]

const Cards = () => {
  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right: ', user.name);
  };

  return (
    <View style={styles.pageContainer}>
      <AnimatedStack
        data={users}
        renderItem={({item}) => <Name user={item} />}
        onSwipeLeft={onSwipeLeft}
        onSwipeRight={onSwipeRight}
      />
      <MatchButtons />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
  },
});

export default Cards;
