import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Home from "./screens/Home";
import Login from "./screens/Login";
import ListaPms from "./screens/ListaPms";
import RegisterUser from "./screens/RegisterUser";

const Stack = createStackNavigator();

export default function App () {
	function MyStack () {
		return (
			<Stack.Navigator
				screenOptions={{
					headerStyle      : {
						backgroundColor : '#e5e500'
					},
					headerTintColor  : 'black',
					headerTitleStyle : {
						fontWeight : 'bold'
					}
				}}
			>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "HENRY" }}
        />
        <Stack.Screen
          name="ListaPms"
          component={ListaPms}
          options={{ title: "Lista de PMs" }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Registro"
          component={RegisterUser}
          options={{ title: "Registro" }}
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
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});
