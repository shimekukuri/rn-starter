import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Tyler James Hutchinson";
  const hello = <Text>Hello There !!!</Text>

  return (
    <View>
      <Text style={styles.textStyle}>Components Screen!</Text>
      <Text style={styles.title}>Getting started with React Native</Text>
      <Text style={styles.name}>Hello my name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50
  },
  title: {
    fontSize: 45,
  },
  name: {
    fontSize: 20
  }
});

export default ComponentsScreen;
