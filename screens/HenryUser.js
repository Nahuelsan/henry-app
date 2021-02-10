import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { 
  BackImg, 
  Contenedor, 
  ContStudents, 
  ContText, 
  ImgSise, 
  Options, 
  TituloCard, 
  ContMinf,
  IconContent,
  ImgMinf,
  LogoSise } from './OptionAdmin/styledAdmin';
import UserHeader from './UserHeader';
import UserNavBar from './UserNavBar';
import firebase from '../database/database';

//Redux importamos funciones y hooks
import {useDispatch} from 'react-redux';
import {logout} from '../src/action';
import Footer from './Footer';

let logFont = require('../src/assets/img/henry_logo.jpg');

const HenryUser = ({navigation}) => {
  const dispatch = useDispatch();
  
  const Logout =()=> {
	  dispatch(logout())
	  firebase.firebase
		  .auth().signOut().then(()=>console.log('sign out'))
	  props.navigation.navigate('Iniciar Sesion')
  }
  return (
    <Contenedor>
      <UserHeader navigation={navigation}/>
      <UserNavBar navigation={navigation}/>
			<ContStudents>
				<Options onPress={() => navigation.navigate('Cohorte de Alumno')}>
					<BackImg>
						<ImgSise  source={{ uri: 'https://i.pinimg.com/originals/b5/bb/80/b5bb80994bc3ecdcd5b989250e6b7746.png' }}/>
					</BackImg>
					<ContText>
						<TituloCard>Tu Cohorte</TituloCard>
						<Text>Quieres conocer quien es tu Instructor y a tus compañeros de Cohorte?</Text>
					</ContText>
				</Options>

				<Options onPress={() => navigation.navigate('Pair Programing')}>
					<BackImg>
						<ImgSise  source={{ uri: 'https://raw.githubusercontent.com/DXHeroes/knowledge-base-content/master/files/pair-programming.svg?sanitize=true' }}/>
					</BackImg>
					<ContText>
						<TituloCard>Pair Programming</TituloCard>
						<Text>En tu Cohorte se asignan grupos de pair programming, Quieres saber más?</Text>
					</ContText>
				</Options>

        <Options onPress={() => props.navigation.navigate('Lista de Estudiantes')}>
					<BackImg>
						<ImgSise  source={{ uri: 'https://banner2.cleanpng.com/20181126/xuv/kisspng-software-developer-software-development-vector-gra-5bfc3520b9c404.2614930415432553287609.jpg' }}/>
					</BackImg>
					<ContText>
						<TituloCard>Stand Up</TituloCard>
						<Text>Reflexiona el trabajo hecho en el día con compañeros de un Cohorte más avanzada</Text>
					</ContText>
				</Options>
			</ContStudents>
			{/* Menu inferior General */}
			<Footer  navigation={navigation}/>
		</Contenedor>
  )
}

export default HenryUser;