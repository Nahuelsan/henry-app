import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { Encabezado, ConTitle, ContAvatar, Welcome } from './styledAdmin';

const AdminHeader = ({navigation, info}) => {
	return (
		<Encabezado>
			<ConTitle>
				<Welcome>Bienvenido </Welcome>
				<Text>Admin Henry</Text>
			</ConTitle>
			<ContAvatar onPress={() => {
				navigation.navigate("Perfil", {info: info})
			}}>
				<Icon solid={true} name="user" type="font-awesome-5" size={40} />
			</ContAvatar>
		</Encabezado>
	);
};

export default AdminHeader;
