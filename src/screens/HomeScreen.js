import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;

  return (
    <View>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigate('Components')}
      ></Button>
      <Button title="Go To List Demo" onPress={() => navigate('List')} />
      <Button
        title="Go to Image Screen"
        onPress={() => navigate('ImageScreen')}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => navigate('Counter')}
      />
      <Button title="Go to Color Screen" onPress={() => navigate('Color')} />
      <Button title="Go to Square Screen" onPress={() => navigate('Square')} />
      <Button
        title="Go to Text Screen"
        onPress={() => navigate('TextScreen')}
      />
      <Button title="Go to Box Screen" onPress={() => navigate('BoxScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
