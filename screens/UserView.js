import React from 'react';
import {useSelector} from 'react-redux';
import HenryUser from './HenryUser';

const UserView = (props) => {
	const info = useSelector(state => state)
	return (
		
			<HenryUser info={info} />
		
	);
};

export default UserView;