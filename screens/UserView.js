import React from 'react';
import { Image, Text, View } from 'react-native';
import UserBody from './UserBody';
import UserHeader from './UserHeader';
import UserNavBar from './UserNavBar';
import Footer from './Footer';

const UserView = (props) => {
	const { info } = props.route.params;
	return (
		<View>
			{console.log(info)}
			<UserHeader info={info} navigation={props.navigation}/>
			<UserNavBar info={info} />
			<UserBody info={info} navigation={props.navigation} />
			<Footer />
		</View>
	);
};

export default UserView;
