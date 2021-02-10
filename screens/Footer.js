import React from 'react';
import { Icon } from 'react-native-elements';

//Redux importamos funciones y hooks
import {useDispatch} from 'react-redux';
import {logout} from '../src/action';

// Style
import { 
  ContMinf,
  ImgMinf,
  IconContent,
  LogoSise } from './OptionAdmin/styledAdmin';

let logFont = require('../src/assets/img/henry_logo.jpg');
import firebase from '../database/database';
  
const Footer = (props) => {

  const dispatch = useDispatch();
  {/* info={info} */}
  const Logout =()=> {
	  dispatch(logout())
	  firebase.firebase
		  .auth().signOut().then(()=>console.log('sign out'))
	  props.navigation.navigate('Iniciar Sesion')
  }

  return (
    <ContMinf>
				<IconContent>
					<Icon
						name="home"
						type="font-awesome"
						size={40}
						onPress={() => props.navigation.navigate('Menu Usuario')}
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
						name="sign-out-alt"
						type="font-awesome-5"
						size={40}
						onPress={() => Logout()}
					/>
				</IconContent>
			</ContMinf>
  )
};

export default Footer;