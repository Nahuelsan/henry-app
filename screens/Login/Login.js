import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	Contenedor,
	Encabezado,
	ContGen,
	Back,
	TituloPrin,
	ContInputs,
	InpText,
	BorderBotInput,
	BotonLog,
	TextButton,
	ContSocialRed,
	IconSocialRed
} from './styledLogin';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import firebase from '../../database/database.js';

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
		firebase.db.collection('users').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
				const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone } = doc.data();
				estudiantes.push({
					email,
					rol,
					first_name,
					last_name,
					nacionalidad,
					photo,
					dni,
					github,
					phone,
					id           : doc.id
				});
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
			if (state.email === '' || !state.email.includes('@')) {
				alert('Ingrese un email válido');
			}
			if (state.password === '') {
				alert('Ingrese un password');
			}
		}
		else {
			var found = users.find((user) => user.email === state.email);
			console.log('found', found);
			if (found) {
				firebase.firebase
					.auth()
					.signInWithEmailAndPassword(state.email, state.password)
					.then((result) => {
						if (found.rol === 'admin') {
							console.log('es admin, va a dashboard admin');
							navigation.navigate('Henry Admin', { info: found });
						}
						else {
							navigation.navigate('Menu Usuario', { info: found });
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
				console.log('found', found);
				if (found) {
					if (found.rol === 'admin') {
						navigation.navigate('Henry Admin', { info: found });
					}
					else {
						navigation.navigate('Menu Usuario', { info: found });
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
						navigation.navigate('Henry Admin', { info: found });
					}
					else {
						console.log('es estudiante, va a dashboard estudiante');
						navigation.navigate('Menu Usuario', { info: found });
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
	const goToRegister = () => {
		navigation.navigate('RegisterUser');
	};

	return (
		<Contenedor>
			{/* Encabezado Back */}
			<Encabezado>
				<FontAwesomeIcon icon={faArrowLeft} size={18} />
				<Back onPress={() => navigation.navigate('Home')}>Regresar</Back>
			</Encabezado>
			<ContGen>
				<TituloPrin>Bienvenido a Henry World</TituloPrin>
				<ContInputs>
					{/* Email Input */}
					<BorderBotInput>
						<InpText
							textContentType="emailAddress"
							keyboardType="email-address"
							placeholder="Ingresa el email"
							onChangeText={(value) => handleChangeText(value, 'email')}
							value={state.email}
						/>
					</BorderBotInput>
					{/* Input Password*/}
					<BorderBotInput>
						<InpText
							secureTextEntry={true}
							placeholder="Ingrese una password"
							onChangeText={(value) => handleChangeText(value, 'password')}
							value={state.password}
						/>
					</BorderBotInput>
				</ContInputs>

				<BotonLog onPress={() => loginManual()}>
					<TextButton>Iniciar Sesion</TextButton>
				</BotonLog>

				<ContSocialRed>
					<Text> O inicia sesión con </Text>
					<IconSocialRed>
						<TouchableOpacity onPress={() => loginGoogle()}>
							<FontAwesomeIcon icon={faGoogle} size={20} />
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesomeIcon icon={faLinkedin} size={20} />
						</TouchableOpacity>
						<TouchableOpacity onPress={() => loginGithub()}>
							<FontAwesomeIcon icon={faGithub} size={20} />
						</TouchableOpacity>
					</IconSocialRed>
				</ContSocialRed>
				{/* 
		<TouchableOpacity>
		<Text style={styles.btntext} onPress={() => goToRegister()}>
			{' '}
			Crear Cuenta {' '}
		</Text>
		</TouchableOpacity> */}
			</ContGen>
		</Contenedor>
	);
};

export default Login;
