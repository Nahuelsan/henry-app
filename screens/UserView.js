import React from 'react';
import { Image, Text, View } from 'react-native';
import UserBody from './UserBody';
import UserHeader from './UserHeader';
import UserNavBar from './UserNavBar';
import Footer from './Footer';

const UserView = () => {
  return (
    <View>
      <UserHeader/>
      <UserNavBar/>
      <UserBody/>
      <Footer />
    </View>
  )
};

export default UserView;