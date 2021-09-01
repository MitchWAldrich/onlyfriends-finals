import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

//All of the different modes
import Name from './Name';
import Bio from './Bio';
import Interests from './Interests';
import Extras from './Extras';


const Cards = function(props)  {
  const { mode, next, back } = props;

  //Card modes
  const NAME = 'NAME';
  const BIO = 'BIO';
  const INTERESTS = 'INTERESTS';
  const EXTRAS = 'EXTRAS';


  return (
    <SafeAreaView style={styles.container}>
      {mode === NAME && <Name next={next(BIO)} />}
      {mode === BIO && <Bio next={() => next(INTERESTS)} back={() => back(NAME)} />}
      {mode === INTERESTS && <Interests next={() => next(EXTRAS)} back={() => back(BIO)} />}
      {mode === EXTRAS && <Extras back={() => back(INTERESTS)} />}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width:'100%',
    alignItems: 'center',
  }
})

export default Cards;

