import React, { useState } from 'react';
import { CountryDropdown} from 'react-country-region-selector';
import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Button } from 'react-native';

import firebase from '../database/database';

const FormularioDatos = (props) => {

	const initalState = {
		first_name   : '',
		last_name    : '',
		email        : props.route.params.email,
		phone        : '',
		dni          : '',
		nacionalidad : '',
		github       : '',
		rol          : 'student',
		photo        :
			'https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg'
	};

	const [
		state,
		setState
	] = useState(initalState);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const saveNewUser = async () => {
		for (var i = 0; state.length < i; i++) {
			console.log(state[i]);
		}
		if (state.first_name === '') {
			alert('Ingrese un nombre');
		}
		if (state.last_name === '') {
			alert('Ingrese un apellido');
		}
		if (state.dni === '') {
			alert('Ingrese un numero dni/cedula');
		}
		if (state.nacionalidad === '') {
			alert('Ingrese una nacionalidad');
		}
		if (state.github === '') {
			alert('Ingrese una cuenta de github');
		}
		else {
			try {
				await firebase.db.collection('users').add({
					first_name   : state.first_name,
					last_name    : state.last_name,
					email        : state.email,
					phone        : state.phone,
					dni          : state.dni,
					nacionalidad : state.nacionalidad,
					github       : state.github,
					rol          : state.rol,
					photo        : state.photo
				});

				return(
					<View style={styles.inputGroup}>
						<Text> Formulario cargado exitosamente, por favor vuelva al Home para poder Loguearse</Text>
						<Button
                                title="Volver al Home"
                            onPress={() => navigation.navigate('Home')}
                        />
					</View>
				)
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<ScrollView style={styles.container}>
			{/* Name Input */}
			<View style={styles.inputGroup}>
				<TextInput
					placeholder="Nombre"
					onChangeText={(value) => handleChangeText(value, 'first_name')}
					value={state.first_name}
				/>
			</View>
			{/* Apellido Input */}
			<View style={styles.inputGroup}>
				<TextInput
					placeholder="Apellidos"
					onChangeText={(value) => handleChangeText(value, 'last_name')}
					value={state.last_name}
				/>
			</View>
			{/* Email Input */}
			<View style={styles.inputGroup}>
				<TextInput
					textContentType="emailAddress"
					keyboardType="email-address"
					placeholder="Email"
					value={state.email}
				/>
			</View>

			{/* Input Phone*/}
			<View style={styles.inputGroup}>
				<TextInput
					placeholder="Telefono/Celular"
					keyboardType="name-phone-pad"
					onChangeText={(value) => handleChangeText(value, 'phone')}
					value={state.phone}
				/>
			</View>

			{/* Input DNI*/}
			<View style={styles.inputGroup}>
				<TextInput
					keyboardType="number-pad"
					placeholder="Numero DNI/Cedula de identidad"
					onChangeText={(value) => handleChangeText(value, 'dni')}
					value={state.dni}
				/>
			</View>
			{/* Input Nacionalidad */}
			<View style={styles.inputGroup}>
				<CountryDropdown
					className={styles.inputGroup}
					value={state.nacionalidad}
					onChange={(value) =>  handleChangeText(value, 'nacionalidad')} 
				/>
			</View>
			{/* Input github account*/}
			<View style={styles.inputGroup}>
				<TextInput
					keyboardType="web-search"
					placeholder="Link a cuenta de Github"
					onChangeText={(value) => handleChangeText(value, 'github')}
					value={state.github}
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
		borderBottomColor : '#cccccc',
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
		fontWeight : 'bold',
		fontSize: 25
	}
});

export default FormularioDatos;
