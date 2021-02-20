import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Feather, Entypo} from "@expo/vector-icons";

import WelcomeScreen from "../screens/WelcomeScreen";
import Article from "../components/Article";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator 
  tabBarOptions={{
    activeTintColor: "black"
  }}>
    <Tab.Screen
      name="Feed"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Article}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Feather name="message-circle" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="ALO"
      component={WelcomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Entypo name="location-pin" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="MU"
      component={Article}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
