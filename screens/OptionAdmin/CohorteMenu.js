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
	ContMinf,
	IconContent,
  ImgMinf,
  ImgSise,
  LogoSise
} from './styledAdmin';
<<<<<<< HEAD
import Footer from '../Footer/Footer';
=======
import Footer from '../Footer';
>>>>>>> 675b0c92735cf792a246c18afe70b52a980f8627
let card1 = require('../../src/assets/img/imgCard2.png');
let card2 = require('../../src/assets/img/imgCard3.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');

const CohorteMenu = ({ navigation }) => {
	return (
		<Contenedor>
			<AdminHeader navigation={navigation} />
			<AdminNavBar navigation={navigation} />

			<ContStudents>
				<Options onPress={() => navigation.navigate('Lista de Cohortes')}>
					<BackImg>
						<ImgSise source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Ver Cohortes</TituloCard>
						<Text>Lista de las cohortes activas y no activas de Henry</Text>
					</ContText>
				</Options>

				<Options onPress={() => navigation.navigate('Crear Cohorte')}>
					<BackImg>
						<ImgSise source={card2} />
					</BackImg>
					<ContText>
						<TituloCard>Crear Cohorte</TituloCard>
						<Text>Crea una nueva Cohorte, para un nuevo programa de Henry</Text>
					</ContText>
				</Options>
			</ContStudents>
<<<<<<< HEAD
      {/* Menu inferior General */}
			<Footer navigation={navigation}/>
=======

			{/* Menu inferior General */}
			<ContMinf>
				<Footer navigation={navigation} />
			</ContMinf>
>>>>>>> 675b0c92735cf792a246c18afe70b52a980f8627
		</Contenedor>
	);
};

export default CohorteMenu;
