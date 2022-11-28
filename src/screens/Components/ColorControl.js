import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

const ColorControl = (props) => {
  const { title, setCounter } = props;
  let { increment } = props;
  if (!increment) {
    increment = 15;
  }

  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <Button
        title={`Increase ${title}`}
        onPress={() => setCounter((prev) => Math.min(prev + increment, 255))}
      />
      <Button
        title={`Decrease ${title}`}
        onPress={() => setCounter((prev) => Math.max(prev - increment, 0))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
  },
});

export default ColorControl;
