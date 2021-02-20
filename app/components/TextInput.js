import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

function AppTextInput({ width = "100%", }) {
  return (
    <View style={[styles.container, { width }]}>
      <TextInput
      placeholder="Search by user or places"
        placeholderTextColor={defaultStyles.colors.badanga}
        style={defaultStyles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    borderStyle: "solid",
    borderColor: "whitesmoke",
    padding: 10,
    marginVertical: 10,

    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },

});

export default AppTextInput;
