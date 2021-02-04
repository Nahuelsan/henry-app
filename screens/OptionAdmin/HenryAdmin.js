import React from 'react';
import { Text } from 'react-native';
import { Icon, Image } from 'react-native-elements';
import AdminHeader from './AdminHeader';
import AdminNavBar from './AdminNavBar';
import {
	Contenedor,
	ContStudents,
	Options,
	BackImg,
	TituloCard,
  ContText,
  ImgSise,
  LogoSise,
	ContMinf,
	IconContent,
	ImgMinf
} from './styledAdmin';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');
import firebase from '../../database/database.js';

//Redux importamos funciones y hooks
import {useDispatch} from 'react-redux';
import {logout} from '../../src/action';



const HenryAdmin = (props) => {

  const dispatch = useDispatch();
  {/* info={info} */}
  const Logout =()=> {
	  dispatch(logout())
	  firebase.firebase
		  .auth().signOut().then(()=>console.log('sign out'))
	  props.navigation.navigate('Iniciar Sesion')
  }

  
	return (
		<Contenedor>
			<AdminHeader navigation={props.navigation} /* info={info} */ /> 
			<AdminNavBar navigation={props.navigation} />
			<ContStudents>
				<Options onPress={() => props.navigation.navigate('Nuevo Henry', {instructor: false})}>
					<BackImg>
						<ImgSise source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Invitar un nuevo Henry</TituloCard>
						<Text>Invita a un nuevo henry a una nueva cohorte </Text>
					</ContText>
				</Options>

				<Options onPress={() => props.navigation.navigate('Lista de Estudiantes')}>
					<BackImg>
						<ImgSise source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Ver Estudiantes</TituloCard>
						<Text>Muestra el listado de alumnos activos y antiguos </Text>
					</ContText>
				</Options>
			</ContStudents>
			{/* Menu inferior General */}
			<ContMinf>
				<IconContent>
					<Icon
						name="home"
						type="font-awesome"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<Icon
						name="ghost"
						type="font-awesome-5"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<ImgMinf>
						<LogoSise source={logFont} />
					</ImgMinf>
					<Icon
						solid={true}
						name="comment-dots"
						type="font-awesome-5"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<Icon
						solid={true}
						name="user"
						type="font-awesome-5"
						size={40}
						onPress={() => Logout()}
					/>
				</IconContent>
			</ContMinf>
		</Contenedor>
	);
};

export default HenryAdmin;
