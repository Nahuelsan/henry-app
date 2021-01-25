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
	ImgMinf
} from './styledAdmin';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');

const HenryAdmin = ({ navigation }, props) => {
	console.log(props);
	//	const { info } = props.route.params;
	return (
		<Contenedor>
			<AdminHeader navigation={navigation} />
			<AdminNavBar navigation={navigation} />
			<ContStudents>
				<Options onPress={() => navigation.navigate('Nuevo Henry')}>
					<BackImg>
						<Image style={{ width: '90px', height: '90px' }} source={card1} />
					</BackImg>
					<ContText>
						<TituloCard>Invitar un nuevo Henry</TituloCard>
						<Text>Invita a un nuevo henry a una nueva cohorte </Text>
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
						onPress={() => navigation.navigate('Henry Admin')}
					/>
					<Icon
						name="ghost"
						type="font-awesome-5"
						size={40}
						onPress={() => navigation.navigate('Henry Admin')}
					/>
					<ImgMinf>
						<Image style={{ width: '40px', height: '40px' }} source={logFont} />
					</ImgMinf>
					<Icon
						solid={true}
						name="comment-dots"
						type="font-awesome-5"
						size={40}
						onPress={() => navigation.navigate('Henry Admin')}
					/>
					<Icon
						solid={true}
						name="user"
						type="font-awesome-5"
						size={40}
						onPress={() => navigation.navigate('Henry Admin')}
					/>
				</IconContent>
			</ContMinf>
		</Contenedor>
	);
};

export default HenryAdmin;
