import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../database/database.js';

const StudentList = ({ navigation }) => {
	const [
		users,
		setUsers
	] = useState([]);

	useEffect(() => {
		firebase.db.collection('users').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
				const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone } = doc.data();
				if (rol === 'pm' || rol === 'student') {
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
				}
			});

			setUsers(estudiantes);
			console.log(users);
		});
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Icon name="left" type="antdesign" onPress={() => navigation.navigate('Henry Admin')} />
				<Text h4>Home</Text>
			</View>

			<View style={styles.marco}>
				<Text style={styles.text}>Lista de Estudiantes</Text>
			</View>
			<View>
				{users.map((student, i) => (
					<ListItem key={i} bottomDivider>
						{!student.photo ? (
							<Avatar
								style={styles.avatar}
								source={{
									uri :
										'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
								}}
								onPress={() => navigation.navigate('Perfil', { info: student })}
							/>
						) : (
							<Avatar
								style={styles.avatar}
								source={{ uri: student.photo }}
								onPress={() => navigation.navigate('Perfil', { info: student })}
							/>
						)}
						<ListItem.Content>
							<ListItem.Title
								style={styles.student}
								onPress={() => navigation.navigate('Perfil', { info: student })}
							>
								{student.last_name},{student.first_name}
							</ListItem.Title>
							{/* <ListItem.Title>{student.nombre}</ListItem.Title> */}
							<ListItem.Subtitle>{student.dni}</ListItem.Subtitle>
							<ListItem.Subtitle>{student.email}</ListItem.Subtitle>
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
	header     : {
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
	estudiante : {
		fontWeight : 700,
		fontSize   : 20
	}
});

export default StudentList;
