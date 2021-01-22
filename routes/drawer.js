import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation'

import AdminHomeStack from './AdminHomeStack';
import CohorteListStack from './CohorteListStack';
import NewCohorteStack from './NewCohorteStack';

const RootDrawerNavigator = createDrawerNavigator({
  Perfil: {
    screen: AdminHomeStack,
  },
  Cohortes: {
    screen: CohorteListStack
  },
  Nuevo_Cohorte:{
    screen: NewCohorteStack
  }
})

export default createAppContainer(RootDrawerNavigator);