import React from 'react';
import { Image, Text, View } from 'react-native';
import UserBody from './UserBody';
import UserHeader from './UserHeader';
import UserNavBar from './UserNavBar';
import Footer from './Footer';
import {useSelector} from 'react-redux';

const UserView = (props) => {
	const info = useSelector(state => state)
	return (
		<View>
			<UserHeader info={info} navigation={props.navigation}/>
			<UserNavBar info={info} />
			<UserBody info={info} />
			<Footer />
		</View>
	);
};

export default UserView;
