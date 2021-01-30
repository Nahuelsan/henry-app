import * as React from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import Home from './screens/Home/Home';
import Login from './screens/Login/Login';
import UserView from './screens/UserView';
import CreateUser from './screens/CreateUser';
import Profile from './screens/Perfil/profile';
import EditarPm from './screens/CRUDPms/EditarPm';
import ListaPms from './screens/CRUDPms/ListaPms';
import Studentcohortes from './screens/Studentcohortes';
import CohorteList from './screens/Cohortes/CohorteList';
import CrearCohorte from './screens/Cohortes/CrearCorte';
import HenryAdmin from './screens/OptionAdmin/HenryAdmin';
import NuevoHenry from './screens/Nuevo Henry/NuevoHenry';
import RegisterUser from './screens/Register/registeruser';
import CohorteMenu from './screens/OptionAdmin/CohorteMenu';
import StudentList from './screens/Estudiantes/StudentList';
import MsgNuevoHenry from './screens/Nuevo Henry/MsgNuevoHenry';
import MsgNuevoCohorte from './screens/Cohortes/MsgNuevoCohorte';
import FormularioDatos from './screens/Register/formulariodatos';
import InstructoresList from './screens/Instructorres/InstructoresList';
import VerCohorte from './screens/Cohortes/VerCohorte';

const Stack = createStackNavigator();

export default function App() {
	const [
		fontsLoad,
		setFontsLoad
	] = React.useState(false);

	/* React.useEffect(() => {
		if (!fontsLoad) {
			getFonts();
		}
	}, []); */

	const getFonts = async () => {
		await Font.loadAsync({
			'Inter-Black': require('./src/assets/fonts/Inter-Black-900.otf'),
			'redRose-bold': require('./src/assets/fonts/RedRose-Bold.ttf'),
			'redRose-light': require('./src/assets/fonts/RedRose-Light.ttf'),
			'redRose-regular': require('./src/assets/fonts/RedRose-Regular.ttf'),
			'redRose-regular': require('./src/assets/fonts/RedRose-Regular.ttf'),
			'gadugi': require('./src/assets/fonts/gadugi.ttf'),
			'gadugib': require('./src/assets/fonts/gadugib.ttf')
		});
	};

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

				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Perfil" component={Profile} />
				<Stack.Screen name="Iniciar Sesion" component={Login} />
				<Stack.Screen name="Menu Usuario" component={UserView} />
				<Stack.Screen name="Henry Admin" component={HenryAdmin} />
				<Stack.Screen name="Nuevo Henry" component={NuevoHenry} />
				<Stack.Screen name="RegisterUser" component={RegisterUser} />
				<Stack.Screen name="Menu Cohortes" component={CohorteMenu} />
				<Stack.Screen name="Crear Cohorte" component={CrearCohorte} />
				<Stack.Screen name="Lista de Cohortes" component={CohorteList} />
				<Stack.Screen name="Ver Cohorte" component={VerCohorte} />
				<Stack.Screen name="Mensaje Cohorte" component={MsgNuevoCohorte} />
				<Stack.Screen name="Lista de Estudiantes" component={StudentList} />
				<Stack.Screen name="Formulario Datos" component={FormularioDatos} />
				<Stack.Screen name="Mensaje NuevoEstudiante" component={MsgNuevoHenry} />
				<Stack.Screen name="Listado de Instructores" component={InstructoresList} />
				<Stack.Screen name="Lista de EstudiantesCohorte" component={Studentcohortes} />
				<Stack.Screen name='Listado de Alumnos sin Cohorte' component={Studentcohortes} />
				<Stack.Screen name="Create User" component={CreateUser} options={{ title: 'Create a New User' }} />
				<Stack.Screen name="Lista_PMs" component={ListaPms} />
				<Stack.Screen name="EditarPM" component={EditarPm} />
			</Stack.Navigator>
		);
	}
	if (!fontsLoad) {
		return (
			<AppLoading
				startAsync={getFonts}
				onFinish={() => { setFontsLoad(true); }}
				onError={console.warn} />
		)
	} else {

		return (
			<NavigationContainer>
				<MyStack />
			</NavigationContainer>
		);
	}
}
