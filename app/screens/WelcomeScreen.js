import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Article from "../components/Article";

import Screen from "../components/Screen";
import AppTextInput from "../components/TextInput";


function WelcomeScreen() {
  return (
   <Screen>

      <View style={styles.logoContainer}>
        <Text style={styles.tagline}> Search</Text>
        <AppTextInput/>
        <Text style={styles.tag}> News</Text>
      </View>
      <View>
        <Article/>
      </View>
          </Screen>
    
  );
}

const styles = StyleSheet.create({
  
  logoContainer: {
    position: "relative",
    marginTop: 30,
    margin: 20,
    marginBottom: 5,
  },
  Container: {
    position: "relative",
    marginTop: 10,
    margin: 20,
  },
  tagline: {
    fontSize: 20,
    fontWeight: "800",
    paddingBottom: 10,
    
  },
  tag: {
    fontSize: 20,
    fontWeight: "800",
    paddingTop: 10,
    
  },
});

export default WelcomeScreen;
