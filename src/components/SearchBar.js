import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export const SearchBar = ({ term, onTermChange,onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather style={styles.iconStyle} name="search" size={35} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        style={styles.inputStyle}
        placeholder="Search"
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom:10
  },
  inputStyle: {
    fontSize: 18,
    flex: 1,
  },
  iconStyle: {
    alignSelf: "center",
    marginHorizontal: 15,
  },
});
