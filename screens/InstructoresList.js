import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import firebase from '../database/database.js';
import db from '../database/database.js';

import AdminHeader from './AdminHeader';
import AdminNavBar from './AdminNavBar';

const list = [
	{
		name       : 'Amy Farha',
		avatar_url : 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg',
		subtitle   : 'Vice President'
	},
	{
		name       : 'Chris Jackson',
		avatar_url : 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg',
		subtitle   : 'Vice Chairman'
	}
];

const InstructoresList = ({ navigation }) => {
	const [
		instructores,
		setInstructores
	] = useState([]);

	useEffect(() => {
		firebase.db.collection('usuarios').onSnapshot((snap) => {
			const profesores = [];
			snap.docs.forEach((doc) => {
				const { nombre, email, rol, dni, nacionalidad, img, telefono } = doc.data();
				if (rol === 'Profesor') {
					profesores.push({ nombre, email, rol, dni, nacionalidad, img, telefono, id: doc.id });
				}
			});
			setInstructores(profesores);
		});
	}, []);

	return (
		<View>
			<AdminHeader navigation={navigation} />
			<AdminNavBar navigation={navigation} />
			{instructores.map((l, i) => (
				<ListItem key={i} bottomDivider>
					<Avatar source={{ uri: l.img }} />
					<ListItem.Content>
						<ListItem.Title>{l.nombre}</ListItem.Title>
						<ListItem.Subtitle>{l.email}</ListItem.Subtitle>
						<ListItem.Subtitle>DNI: {l.dni}</ListItem.Subtitle>
						<ListItem.Subtitle>{l.nacionalidad}</ListItem.Subtitle>
						<ListItem.Subtitle>Teléfono: {l.telefono}</ListItem.Subtitle>
					</ListItem.Content>
				</ListItem>
			))}
		</View>
	);
};
export default InstructoresList;
