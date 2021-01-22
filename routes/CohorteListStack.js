import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';
import CohorteList from '../screens/CohorteList'
import Header from '../screens/Header'

const screens = {
  CohorteList: {
    screen: CohorteList,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title='Lista de Cohortes'/>,
      }
    }
  },

}

const CohorteListStack = createStackNavigator(screens,{
  defaultNavigationOptions:{
    display:'flex',
    headerTintColor:'#ffffff',
    headerStyle:{backgroundColor:'#e5e500', height: 50}
  }
})

export default CohorteListStack;