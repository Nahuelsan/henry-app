import * as React from 'react';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import Login from './screens/Login';
import CreateUser from './screens/CreateUser';
import Home from './screens/Home';
import RegisterUser from './screens/RegisterUser';
import FormularioDatos from './screens/FormularioDatos';
import HenryStudent from './screens/HenryStudent';
import CohorteMenu from './screens/CohorteMenu';
import InstructoresList from './screens/InstructoresList';

const Stack = createStackNavigator();

export default function App() {
  function MyStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#e5e500'
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen name="Iniciar Sesion" component={Login} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
        <Stack.Screen name="Create User" component={CreateUser} options={{ title: 'Create a New User' }} />
        <Stack.Screen name="RegisterUser" component={RegisterUser} />
        <Stack.Screen name="Formulario Datos" component={FormularioDatos} />
        <Stack.Screen name="Henry Student" component={HenryStudent} />
        <Stack.Screen name="Menu Cohortes" component={CohorteMenu} />
        <Stack.Screen name="Listado de Instructores" component={InstructoresList} />
      </Stack.Navigator>

    );
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


