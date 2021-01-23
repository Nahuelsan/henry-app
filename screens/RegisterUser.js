import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import firebase from '../database/database.js';

const RegisterUser = (props) => {
	const initalState = {
		password         : '',
		password_checked : '',
		email            : ''
	};

	const [
		state,
		setState
	] = useState(initalState);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const saveNewUser = async () => {
		if (state.email === '') {
			alert('Ingrese un email');
		}
		if (state.password === '') {
			alert('Ingrese un password');
		}
		if (state.password_checked === '') {
			alert('Verifique contraseña');
		}
		if (state.password !== state.password_checked) {
			alert('Las claves son coinciden');
		}
		else {
			try {
				await firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password);
				alert('Usuario creado');
				props.navigation.navigate('Formulario Datos');
			} catch (error) {
				console.log(error);
				alert('Error');
			}
		}
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
			{/* Input Password Checked*/}
			<View style={styles.inputGroup}>
				<TextInput
					placeholder="Validar password"
					onChangeText={(value) => handleChangeText(value, 'password_checked')}
					value={state.password_checked}
				/>
			</View>
			<View>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.btntext} onPress={() => saveNewUser()}>
						{' '}
						ENVIAR{' '}
					</Text>
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
	button     : {
		alignSelf       : 'stretch',
		alignItems      : 'center',
		padding         : 20,
		backgroundColor : '#ffe227'
	},
	btntext    : {
		fontWeight : 'bold'
	}
});

export default RegisterUser;
