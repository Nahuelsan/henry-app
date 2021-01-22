import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components
import Login from './screens/Login';
import CreateUser from './screens/CreateUser';

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
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Create User" component={CreateUser} options={{ title: 'Create a New User' }} />
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
