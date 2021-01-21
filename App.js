import * as React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import { StatusBar } from "expo-status-bar";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Components
import CreateUser from "./screens/CreateUser";

const Stack = createStackNavigator();

export default function App() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#621FF7",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="CreateUserScreen"
          component={CreateUser}
          options={{ title: "Create a New User" }}
        />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
