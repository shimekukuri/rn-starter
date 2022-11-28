import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <>
      <View style={styles.parent}>
        <View style={styles.redBox}></View>
        <View style={styles.blueBox}></View>
      </View>
      <View style={styles.greenBox}></View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    alignSelf: 'center',
  },
});

export default BoxScreen;
