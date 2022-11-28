import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ColorControl from './screens/Components/ColorControl';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  return (
    <View>
      <ColorControl title="Red" setCounter={setRed} />
      <ColorControl title="Blue" setCounter={setBlue} />
      <ColorControl title="Green" setCounter={setGreen} />
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default SquareScreen;
