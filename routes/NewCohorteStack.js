import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import NewCohorte from '../screens/NewCohorte'
import Header from '../screens/Header'

const screens = {
  NewCohorte: {
    screen: NewCohorte,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Nuevo Cohorte'/>,
      }
    }
  },

}

const NewCohorteStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    display:'flex',
    headerTintColor:'#ffffff',
    headerStyle:{backgroundColor:'#e5e500', height: 50}
  }
})

export default NewCohorteStack;