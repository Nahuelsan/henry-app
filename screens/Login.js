import React, { useEffect, useState } from 'react';
import { Image, Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import firebase from '../database/database.js';
import db from '../database/database.js';
import { Button, Divider } from 'react-native-elements';

const Login = ({ navigation }) => {
	const initalState = {
		password : '',
		email    : ''
	};

	const [
		users,
		setUsers
	] = useState([]);

	const [
		state,
		setState
	] = useState(initalState);

	useEffect(() => {
		firebase.db.collection('usuarios').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
				const { email, rol } = doc.data();
				estudiantes.push({ email, rol, id: doc.id });
			});
			setUsers(estudiantes);
			console.log(users);
		});
	}, []);

	const handleChangeText = (value, name) => {
		setState({ ...state, [name]: value });
	};

	const loginManual = async () => {
		if (state.email === '' || state.password === '') {
			if (state.email === '' || !state.password.includes('@')) {
				alert('Ingrese un email válido');
			}
			if (state.password === '') {
				alert('Ingrese un password');
			}
		}
		else {
			var found = users.find((user) => user.email === state.email);
			if (found) {
				firebase.firebase
					.auth()
					.signInWithEmailAndPassword(state.email, state.password)
					.then((result) => {
						if (found.rol === 'admin') {
							console.log('es admin, va a dashboard admin');
							navigation.navigate('Henry Student');
						}
						else {
							navigation.navigate('Henry Student');
							console.log('es estudiante, va a dashboard estudiante');
						}
					})
					.catch((error) => {
						alert(error);
					});
			}
			else {
				alert('el usuario no se encuentra en la base de datos de estudiantes de Henry');
			}
		}
	};

	const loginGoogle = async () => {
		console.log('se ejecuta la funcionLoginGoogle');
		firebase.firebase
			.auth()
			.signInWithPopup(new firebase.firebase.auth.GoogleAuthProvider())
			.then((result) => {
				console.log(result.user);
				var found = users.find((user) => user.email === result.user.email);
				if (found) {
					if (found.rol === 'admin') {
						console.log('es admin, va a dashboard admin');
						navigation.navigate('Henry Student');
					}
					else {
						navigation.navigate('Henry Student');
						console.log('es estudiante, va a dashboard estudiante');
					}
				}
				else {
					throw 'el email no se encuentra en la base de datos de estudiantes';
				}
				/* @type {firebase.auth.OAuthCredential} */
			})
			.catch((error) => {
				alert(error);
			});
	};

	const loginGithub = async () => {
		console.log('se ejecuta la funcionLoginGithub');
		firebase.firebase
			.auth()
			.signInWithPopup(new firebase.firebase.auth.GithubAuthProvider())
			.then((result) => {
				console.log(result);
				var found = users.find((user) => user.email === result.user.email);
				if (found) {
					if (found.rol === 'admin') {
						console.log('es admin, va a dashboard admin');
						navigation.navigate('Henry Student');
					}
					else {
						console.log('es estudiante, va a dashboard estudiante');
						navigation.navigate('Henry Student');
					}
				}
				else {
					window.close();
					throw 'el email no se encuentra en la base de datos de estudiantes';
				}
				/* @type {firebase.auth.OAuthCredential} */
			})
			.catch((error) => {
				alert(error);
			});
	};
	const goToRegister = async () => {
		navigation.navigate('RegisterUser');
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
					secureTextEntry={true}
					placeholder="Ingrese una password"
					onChangeText={(value) => handleChangeText(value, 'password')}
					value={state.password}
				/>
			</View>

			<TouchableOpacity style={styles.button}>
				<Text style={styles.btntext} onPress={() => loginManual()}>
					{' '}
					LOG IN {' '}
				</Text>
			</TouchableOpacity>

			<View style={styles.btnLogin}>
				<Text style={{ fontSize: 'large', fontWeight: 'bold' }}> Iniciar sesión con: </Text>

				<TouchableOpacity onPress={() => loginGoogle()}>
					<Image
						style={styles.tinyLogo}
						source={{
							uri : 'https://pngimg.com/uploads/google/google_PNG19635.png'
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => loginGithub()}>
					<Image
						style={styles.tinyLogo}
						source={{
							uri : 'https://github.githubassets.com/images/modules/logos_page/Octocat.png'
						}}
					/>
				</TouchableOpacity>
			</View>

			<TouchableOpacity>
				<Text style={styles.btntext} onPress={() => goToRegister()}>
					{' '}
					Crear Cuenta {' '}
				</Text>
			</TouchableOpacity>
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
		marginTop         : 50,
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
		justifyContent : 'spaceBetween'
		/* bottom         : 0,
		justifyContent : 'center',
 */
		/* display : 'flex',
		margin  : 'auto'
		 */
	},
	button     : {
		alignSelf       : 'stretch',
		alignItems      : 'center',
		padding         : 15,
		backgroundColor : '#e5e500',
		border          : 'groove',
		borderRadius    : '8px',
		justifyContent  : 'center',
		marginBottom    : 20
	},
	btntext    : {
		textAlign  : 'right',
		fontWeight : 'bold',
		fontSize   : '120%'
	},
	tinyLogo   : {
		width          : 100,
		height         : 100,
		justifyContent : 'center'
	}
});

export default Login;
