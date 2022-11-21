import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const freinds = [
    { name: "friend1", age: 1 },
    { name: "friend2", age: 2 },
    { name: "friend3", age: 3 },
    { name: "friend4", age: 4 },
    { name: "friend5", age: 5 },
    { name: "friend6", age: 6 },
    { name: "friend7", age: 7 },
    { name: "friend8", age: 8 },
    { name: "friend9", age: 9 },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={freinds}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
