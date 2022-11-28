import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button
        title="Increase Count"
        onPress={() => setCounter((prev) => prev + 1)}
      />
      <Button
        title="Decrease Count"
        onPress={() => setCounter((prev) => prev - 1)}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
