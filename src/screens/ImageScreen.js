import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "./Components/ImageDetail";

const ImageScreen = (props) => {

  return (
    <View>
      <ImageDetail title="Forrest" imageSource={require('../../assets/forest.jpg')} score="4"/>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score="7"/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score="9"/>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
