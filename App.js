import * as React from 'react';
import * as Font from 'expo-font';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Components

import Login from './screens/Login/Login';
import CreateUser from './screens/CreateUser';
import Home from './screens/Home/Home';
import RegisterUser from './screens/RegisterUser';
import FormularioDatos from './screens/FormularioDatos';
import HenryAdmin from './screens/OptionAdmin/HenryAdmin';
import CohorteMenu from './screens/OptionAdmin/CohorteMenu';
import InstructoresList from './screens/InstructoresList';
import NuevoHenry from './screens/NuevoHenry';
import CohorteList from './screens/CohorteList';
import CrearCohorte from './screens/CrearCorte';
import UserView from './screens/UserView';

const Stack = createStackNavigator();

export default function App () {
	const [
		fontsLoad,
		setFontsLoad
	] = React.useState(false);

	React.useEffect(() => {
		if (!fontsLoad) {
			getFonts();
		}
	}, []);

	const getFonts = async () => {
		await Font.loadAsync({
			'redRose-bold'    : require('./src/assets/fonts/RedRose-Bold.ttf'),
			'redRose-light'   : require('./src/assets/fonts/RedRose-Light.ttf'),
			'redRose-regular' : require('./src/assets/fonts/RedRose-Regular.ttf'),
			'redRose-regular' : require('./src/assets/fonts/RedRose-Regular.ttf'),
			gadugi            : require('./src/assets/fonts/GADUGI.ttf'),
			gadugib           : require('./src/assets/fonts/GADUGIB.ttf')
		});
		setFontsLoad(true);
	};

	function MyStack () {
		return (
			<Stack.Navigator
				screenOptions={{
					headerShown      : false,
					headerStyle      : {
						backgroundColor : '#e5e500'
					},
					headerTintColor  : 'black',
					headerTitleStyle : {
						fontWeight : 'bold'
					}
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Iniciar Sesion" component={Login} />
				<Stack.Screen name="Henry Admin" component={HenryAdmin} />
				<Stack.Screen name="Create User" component={CreateUser} options={{ title: 'Create a New User' }} />
				<Stack.Screen name="RegisterUser" component={RegisterUser} />
				<Stack.Screen name="Formulario Datos" component={FormularioDatos} />
				<Stack.Screen name="Menu Cohortes" component={CohorteMenu} />
				<Stack.Screen name="Listado de Instructores" component={InstructoresList} />
				<Stack.Screen name="Nuevo Henry" component={NuevoHenry} />
				<Stack.Screen name="Lista de Cohortes" component={CohorteList} />
				<Stack.Screen name="Crear Cohorte" component={CrearCohorte} />
				<Stack.Screen name="Menu Usuario" component={UserView} />
			</Stack.Navigator>
		);
	}

	return (
		<NavigationContainer>
			<MyStack />
		</NavigationContainer>
	);
}
