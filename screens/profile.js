import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Picker, ActivityIndicator, TextInput, Button, Alert } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';
import firebase from '../database/database';

const Profile = (props) => {
	const { info } = props.route.params;
	const { navigation } = props;

	const [
		user,
		setUser
	] = useState(info);

	const [
		edit,
		setEdit
	] = useState(false);

	const [
		selectedRol,
		setSelectedRol
	] = useState('');

	const dbRef = firebase.db.collection('users').doc(info.id);
	/* 
	useEffect(() => {
		setUser(info);
	}, []); */

	const profile = [
		{
			att : 'Dni / Cedula',
			val : 'dni'
		},
		{
			att : 'Github',
			val : 'github'
		},
		{
			att : 'Nacionalidad',
			val : 'nacionalidad'
		},
		{
			att : 'Telefono',
			val : 'phone'
		}
	];

	const updateUser = async () => {
		profile.map((field) => !!user[field.val]).includes(false)
			? Alert.alert('Todos los campos deben estar completos', '', [
					{ text: 'Aceptar' }
				])
			: await dbRef.set(user);
	};

	const eliminar = async () => {
		if (confirm('Esta seguro de querer eliminar este Usuario')) {
			await dbRef.delete();
			alert('Usuario Eiminado');
			navigation.navigate('Henry Admin');
		}
		else {
		}
	};

	const setPermisos = async (rol) => {
		if (confirm('Esta seguro del cambio de Perfil de Usuario')) {
			await dbRef.set({ ...user, rol: rol });
			setUser({ ...user, rol: rol });
		}
		else {
		}

		/* Alert.alert(
			'Cambiar Perfil Usuario',
			'Esta seguro del cambio de Permisos de Usuario',
			[
				{
					text    : 'Cancel',
					onPress : () => console.log('Cancel Pressed'),
					style   : 'cancel'
				},
				{
					text    : 'OK',
					onPress : async () => {
						await dbRef.set({ ...user, rol: rol });
					}
				}
			],
			{ cancelable: false }
		); */
	};

	return (
		<ScrollView style={styles.container_main}>
			<View style={styles.header}>
				<Icon name="left" type="antdesign" onPress={() => navigation.navigate('Henry Admin')} />
				<Text h4>Home</Text>
			</View>
			<View style={styles.container_img_name}>
				<Avatar
					source={{
						uri : user.photo
							? user.photo
							: 'https://www.mendozapost.com/files/image/7/7142/54b6f4c45797b.jpg'
					}}
					size="large"
					rounded
				/>
				<View style={styles.name}>
					<Text style={styles.title}>{`${user.first_name} ${user.last_name}`}</Text>
					<Text style={styles.subtitle}>{user.email}</Text>
					<Text style={styles.subtitle}>Perfil: {user.rol}</Text>
				</View>
			</View>

			<View style={styles.datos}>
				<Text style={{ fontWeight: 'bold', fontSize: 15 }}>Datos</Text>
				{profile.map((field) => (
					<View style={styles.container} key={field.att}>
						<View style={styles.container_data}>
							<Text style={styles.attribute}>{field.att}</Text>
							{edit ? (
								<TextInput
									placeholder={field.att}
									value={user[field.val]}
									onChangeText={(val) => setUser({ ...user, [field.val]: val })}
								/>
							) : (
								<Text style={styles.value}>{user[field.val]}</Text>
							)}
						</View>
					</View>
				))}
				<Button
					title={edit ? 'Guardar cambios' : 'Editar'}
					onPress={() => {
						setEdit(!edit), edit && updateUser();
					}}
				/>
			</View>

			<View style={styles.datos}>
				<Text style={{ fontWeight: 'bold', fontSize: 15 }}>Actualizar Permisos de Usuario</Text>
				<Text style={{ fontSize: 15 }}>Selecciona el rol del usuario</Text>
				<Picker
					/* selectedRol={selectedRol}
					 */ style={{ height: 50, width: 150 }}
					onValueChange={(itemValue, itemIndex) => setSelectedRol(itemValue)}
				>
					<Picker.Item label="Selección" value="" />
					{user.rol !== 'student' ? <Picker.Item label="Estudiante" value="student" /> : null}
					{user.rol !== 'pm' ? <Picker.Item label="PM" value="pm" /> : null}
					{user.rol !== 'instructor' ? <Picker.Item label="Instructor" value="instructor" /> : null}
					{user.rol !== 'admin' ? <Picker.Item label="Administrador" value="admin" /> : null}
				</Picker>

				<Button
					title={selectedRol ? 'Actualizar' : 'Seleccione una opción'}
					disabled={selectedRol ? false : true}
					onPress={() => setPermisos(selectedRol)}
				/>
			</View>

			<View style={styles.datos}>
				<Button style={{ backgroundColor: 'red' }} title="Eliminar Usuario" onPress={() => eliminar()} />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container_main     : {
		backgroundColor : '#e5e500'
	},
	header             : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	},
	container_img_name : {
		flex            : 1,
		flexDirection   : 'row',
		alignItems      : 'center',
		height          : 120,
		position        : 'relative',
		backgroundColor : 'white',
		paddingLeft     : 15,
		shadowColor     : '#000',
		shadowOffset    : {
			width  : 0,
			height : 3
		},
		shadowOpacity   : 0.27,
		shadowRadius    : 4.65,
		elevation       : 6
	},
	name               : {
		marginLeft : 15,
		flex       : 1
	},
	title              : {
		fontSize : 25
	},
	subtitle           : {
		color : 'gray'
	},
	text               : {
		margin : 7
	},
	datos              : {
		backgroundColor : 'white',
		marginTop       : 18,
		padding         : 15,
		shadowColor     : '#000',
		shadowOffset    : {
			width  : 0,
			height : 3
		},
		shadowOpacity   : 0.27,
		shadowRadius    : 4.65,
		elevation       : 6
	},
	/* container: {
        flex: 1,
        justifyContent: 'space-between'
    }, */
	container_data     : {
		marginTop         : 10,
		paddingBottom     : 10,
		borderBottomColor : '#e5e500',
		borderBottomWidth : 1
	},
	value              : {
		fontWeight : 'bold',
		color      : 'black'
	},
	attribute          : {
		color     : 'gray',
		marginTop : 7
	}
});

export default Profile;