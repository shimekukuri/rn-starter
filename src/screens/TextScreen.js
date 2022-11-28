import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';

const TextScreen = () => {
  const [inputText, setInputText] = useState();

  return (
    <View>
      <Text style={styles.title}>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputText}
        onChangeText={(e) => setInputText(e)}
      />
      {inputText.length < 6 && (
        <Text style={{ color: 'red' }}>
          Please Enter more than 5 Characters
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  title: {
    fontSize: 50,
  },
});

export default TextScreen;
