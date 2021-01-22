import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import firebase from '../database/database.js';
import db from '../database/database.js';
import { Button, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = (props) => {
	const initalState = {
		password : '',
		email    : ''
	};

	const [
		state,
		setState
	] = useState(initalState);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const loginManual = async () => {
		console.log(db); // Function
		console.log(firebase.firebase.auth); // Function
		if (state.email === '' || state.password === '') {
			if (state.email === '') {
				alert('Ingrese un email');
			}
			if (state.password === '') {
				alert('Ingrese un password');
			}
		}
		else {
			//  try {

			console.log(
				'Buscar usuario en Base de Datos de Usuarios con el email y si no está enviar a formulario de registo'
			);
			alert('Login Correcto');
			/*     await firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
        alert("Usuario creado")
      } catch (error) {
        console.log(error)
        alert("Error")
     */
		}
	};

	const loginGoogle = async () => {
		console.log(firebase.auth);
		firebase.firebase
			.auth()
			.signInWithPopup(new firebase.firebase.auth.GoogleAuthProvider())
			.then((result) => {
				console.log(result.user);
				/* @type {firebase.auth.OAuthCredential} */

				alert('Login Correcto');
				var credential = result.credential;

				// This gives you a Google Access Token. You can use it to access the Google API.
				var token = credential.accessToken;
				// The signed-in user info.
				var user = result.user;
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// The email of the user's account used.
				var email = error.email;
				// The firebase.auth.AuthCredential type that was used.
				var credential = error.credential;
				// ...
			});
	};

	return (
		<ScrollView style={styles.container}>
			{/* Email Input */}
			<View style={styles.inputGroup}>
				<TextInput
					textContentType="emailAddress"
					keyboardType="email-address"
					placeholder="Email"
					onChangeText={(value) => handleChangeText(value, 'email')}
					value={state.email}
				/>
			</View>
			{/* Input Password*/}
			<View style={styles.inputGroup}>
				<TextInput
					placeholder="Ingrese una password"
					onChangeText={(value) => handleChangeText(value, 'password')}
					value={state.password}
				/>
			</View>
			<Divider style={{ width: '80%', margin: 20 }} />
			<View style={styles.btnLogin}>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.btntext} onPress={() => loginManual()}>
						{' '}
						LOG IN {' '}
					</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.btntext} onPress={() => loginGoogle()}>
						{' '}
						Log In with your Google Account {' '}
					</Text>
					<Image
						style={styles.tinyLogo}
						source={{
							uri : 'https://pngimg.com/uploads/google/google_PNG19635.png'
						}}
					/>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container  : {
		flex    : 1,
		padding : 35
	},
	inputGroup : {
		flex              : 1,
		padding           : 0,
		marginBottom      : 15,
		borderBottomWidth : 1,
		borderBottomColor : '#cccccc'
	},
	loader     : {
		left           : 0,
		right          : 0,
		top            : 0,
		bottom         : 0,
		position       : 'absolute',
		alignItems     : 'center',
		justifyContent : 'center'
	},
	btnLogin   : {
		position       : 'fixed',
		bottom         : 0,
		justifyContent : 'center'
	},
	button     : {
		alignSelf       : 'stretch',
		alignItems      : 'center',
		padding         : 20,
		backgroundColor : '#e5e500',
		border          : 'groove',
		borderRadius    : '8px',
		justifyContent  : 'center'
	},
	btntext    : {
		fontWeight : 'bold'
	},
	tinyLogo   : {
		width          : 50,
		height         : 50,
		justifyContent : 'center'
	}
});

export default Login;
