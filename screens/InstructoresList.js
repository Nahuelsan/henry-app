import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../database/database.js';
import AdminHeader from './OptionAdmin/AdminHeader';
import AdminNavBar from './OptionAdmin/AdminNavBar';

const InstructoresList = ({ navigation }) => {
	const [
		instructores,
		setInstructores
	] = useState([]);

	useEffect(() => {
		firebase.db.collection('users').onSnapshot((snap) => {
			const profesores = [];
			snap.docs.forEach((doc) => {
				const { first_name, last_name, email, rol, dni, nacionalidad, photo, phone } = doc.data();
				if (rol === 'instructor') {
					profesores.push({ first_name, last_name, email, rol, dni, nacionalidad, photo, phone, id: doc.id });
				}
			});
			setInstructores(profesores);
		});
	}, []);

	return (
		<View style={styles.container}>
		<View style={styles.header}>
			<Icon name="left" type="antdesign" onPress={() => navigation.navigate('Henry Admin')} />
			<Text h4>Home</Text>
		</View>

		<View style={styles.marco}>
			<Text style={styles.text}>Lista de Instructores</Text>
		</View>
		<View>
			{instructores.map((instructor, i) => (
				<ListItem key={i} bottomDivider>
					{!instructor.photo ? (
						<Avatar
							style={styles.avatar}
							source={{
								uri :
									'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
							}}
							onPress={() => navigation.navigate('Perfil', { info: instructor })}
						/>
					) : (
						<Avatar
							style={styles.avatar}
							source={{ uri: instructor.photo }}
							onPress={() => navigation.navigate('Perfil', { info: instructor })}
						/>
					)}
					<ListItem.Content>
						<ListItem.Title
							style={styles.instructor}
							onPress={() => navigation.navigate('Perfil', { info: istructor })}
						>
							{instructor.last_name},{instructor.first_name}
						</ListItem.Title>
						{/* <ListItem.Title>{student.nombre}</ListItem.Title> */}
						<ListItem.Subtitle>{instructor.dni}</ListItem.Subtitle>
						<ListItem.Subtitle>{instructor.email}</ListItem.Subtitle>
						{/* <ListItem.Subtitle style={styles.cohorte}>Cohorte # {student.id_cohorte}</ListItem.Subtitle> */}
					</ListItem.Content>
				</ListItem>
			))}
		</View>
	</View>
	);
};

const styles = StyleSheet.create({
	container  : {
		flex : 1
	},
	header : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	},
	marco      : {
		backgroundColor : '#e5e500',
		textAlign       : 'center'
	},
	text       : {
		fontSize : 30
	},
	avatar     : {
		width  : 100,
		height : 100
	},
	instructor : {
		fontWeight : 700,
		fontSize   : 20
	}

});

export default InstructoresList;
