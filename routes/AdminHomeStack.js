import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';

import AdminHome from '../screens/AdminHome';
import Header from '../screens/Header';

const screens = {
  AdminHome: {
    screen: AdminHome,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Perfil Admin'/>,
      }
    }
  },

}

const AdminHomeStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    display:'flex',
    headerTintColor:'#ffffff',
    headerStyle:{backgroundColor:'#e5e500', height: 50}
  }
})

export default AdminHomeStack;