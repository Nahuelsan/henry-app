import React from 'react';
import { Icon } from 'react-native-elements';

//Redux importamos funciones y hooks
import {useDispatch} from 'react-redux';
import {logout} from '../../src/action';

// Style
import { 
  ContMinf,
  ImgMinf,
  IconContent,
  LogoSise } from './styledFooter';

let logFont = require('../../src/assets/img/henry_logo.jpg');
import firebase from '../../database/database';
  
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
						solid={true}
						name="user"
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
          <ImgMinf>
						<LogoSise source={logFont} />
					</ImgMinf>
				</IconContent>
			</ContMinf>
  )
};

export default Footer;