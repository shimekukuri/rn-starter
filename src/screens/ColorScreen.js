import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add Color"
        onPress={() => setColors((prev) => [...prev, randomRGB()])}
      />
      <Button title="Clear Colors" onPress={() => setColors([])} />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.floor(Math.random() * 256));
  const green = Math.floor(Math.floor(Math.random() * 256));
  const Blue = Math.floor(Math.floor(Math.random() * 256));

  return `rgb(${red}, ${Blue}, ${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
