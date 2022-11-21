import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  const {navigation: {navigate}} = props;

  return (
    <View>
      <Text style={styles.text}>test</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigate("Components")}
      ></Button>
      <Button
        title="Go To List Demo"
        onPress={() => navigate("List")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
