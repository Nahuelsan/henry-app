import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, ListItem, Button, Text } from 'react-native-elements';

import firebase from '../database/database';

const CohorteList = ({ navigation }) => {
	const [
		cohorte,
		setCohorte
	] = useState([]);
	useEffect(() => {
		firebase.db.collection('cohorte').onSnapshot((query) => {
			var data = [];
			query.docs.forEach((docs) => {
				const { comienzo, descripcion, fin, modalidad } = docs.data();
				data.push({
					id          : docs.id,
					comienzo,
					descripcion,
					fin,
					modalidad
				});
			});
			setCohorte(data);
		});
	}, []);

	const onPressSee = () => {};
	const onPressEdit = () => {};
	return (
		<View>
			<View style={styles.header}>
				<Icon name="left" type="antdesign" onPress={() => navigation.navigate('Henry Admin')} />
				<Text h4>Home</Text>
			</View>
			{/* <Text h2> Listado de cohortes</Text> */}
			{cohorte.map((l, i) => (
				<ListItem key={i} bottomDivider>
					<ListItem.Chevron />

					<ListItem.Content style={{ flex: 1, flexDirection: 'row' }}>
						<ListItem.Content>
							<ListItem.Title>{`Cohorte ${l.id}`}</ListItem.Title>
							<ListItem.Subtitle>{`Comienzo ${l.comienzo}`}</ListItem.Subtitle>
							<ListItem.Subtitle>{`Fin ${l.fin}`}</ListItem.Subtitle>
						</ListItem.Content>
						<ListItem.Content style={{ flex: 1, flexDirection: 'row' }}>
							<Button onPress={onPressSee} title="See" />
							<Button onPress={onPressEdit} title="Edit" />
						</ListItem.Content>
					</ListItem.Content>
				</ListItem>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	header : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	}
});
export default CohorteList;
