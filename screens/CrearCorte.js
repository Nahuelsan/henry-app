import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image, Icon, ListItem, Input, Button, ButtonGroup } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
//import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePicker from "react-native-modal-datetime-picker";


const CrearCohorte = ({ navigation }) => {
  //Botones Full Time - Part Time
  const [index, setIndex] = useState(1)
  const buttons = ['Full Time', 'Part Time']
  const updateIndex = (index) => {
    setIndex(index)
    handleChangeText(buttons[index],'modalidad')
  }

  //Modal Calendario
  const [isVisible, setIsVisible] = useState(false)
  const showDateTimePicker = () => {
    setIsVisible(true);
    console.log('entre', isVisible)
  };
  const hideDateTimePicker = () => {
    setIsVisible(false);
  };
  const handleDatePicked = (date,name) => {
    handleChangeText(date,name)
    //console.log("A date has been picked: ", date);
    hideDateTimePicker();
  };

  const initalState = {
		numero_de_cohorte   : '',
		modalidad   : '',
		fecha_de_inicio: '',
		fecha_de_finalizacion: '',
		instructor: '',
    numero_de_grupo: '',
    alumnos: []		
	};

	const [state,	setState] = useState(initalState);

	const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
    console.log('state',state)
	};

	const saveNewCohorte = async () => {
		for (var i = 0; state.length < i; i++) {
			console.log(state[i]);
		}
		if (state.modalidad === '') {
			alert('Ingrese modalidad');
		}
		if (state.fecha_de_inicio === '') {
			alert('Ingrese fecha de inicio');
		}
		if (state.fecha_de_finalizacion === '') {
			alert('Ingrese fecha de finalizacio');
		}
		if (state.instructor === '') {
			alert('Ingrese un instructor');
		}
		if (state.numero_de_grupo === '') {
			alert('Ingrese numero de grupo');
    }
    if (state.alumnos === []) {
			alert('Ingrese alumnos');
		}
		else {
			try {
				await firebase.db.collection('cohortes').add({
					modalidad: state.modalidad,
					fecha_de_inicio: state.fecha_de_inicio,
					fecha_de_finalizacion: state.fecha_de_finalizacion,
					instructor: state.instructor,
					numero_de_grupo: state.numero_de_grupo,
					alumnos : state.alumnos,
				});
				props.navigation.navigate('Henry Admin');
			} catch (error) {
				console.log(error);
			}
		}
	};


  return (
    <View>
      <View style={styles.header} >
        <Icon
          name="left"
          type='antdesign'
          onPress={() => navigation.navigate('Henry Student')}
        />
        <Text h4>Home</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{ width: '150px', height: '150px' }}
            source={{ uri: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg' }} />
        </View>
        <View style={styles.text}>
          <Text>CREAR COHORTE</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipiscing, elit curabitur mollis dictum ornare, ac morbi dictumst metus ut. Integer risus tellus pulvinar diam convallis platea sed massa, </Text>
        </View>
      </View>
      <View>

        <ListItem>
          <Text h4>COHORTE N°</Text>
          <RNPickerSelect
            onValueChange={(value) => handleChangeText(value,'numero_de_cohorte')}
            value={state.value}
            items={[
              { label: '01', value: '01' },
              { label: '02', value: '02' },
              { label: '03', value: '03' },
              { label: '04', value: '04' },
              { label: '05', value: '05' },
              { label: '06', value: '06' },
              { label: '07', value: '07' },
              { label: '08', value: '08' },
              { label: '09', value: '09' },
              { label: '10', value: '10' },
              { label: '11', value: '11' },
            ]}
          />
        </ListItem>

        <ListItem>
          <Text h4>MODALIDAD</Text>
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={index}
            buttons={buttons}
            containerStyle={{ height: 100 }}
          />
        </ListItem>

        <ListItem>
          <Text h4>FECHA DE INICIO</Text>
          <Icon
            name='calendar-sharp'
            type='ionicon'
            onPress={showDateTimePicker} />
          <DateTimePicker
            mode='date'
            display="default"
            style={{ width: 320, backgroundColor: "white" }}
            isVisible={isVisible}
            name='fecha_de_inicio'
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
          />
        </ListItem>

        <ListItem>
          <Text h4>FECHA DE FINALIZACION</Text>
          <Icon
            name='calendar-sharp'
            type='ionicon'
            onPress={showDateTimePicker} />
            <DateTimePicker
            mode='date'
            display="default"
            style={{ width: 320, backgroundColor: "white" }}
            isVisible={isVisible}
            name='fecha_de_finalizacion'
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
          />
        </ListItem>

        <ListItem>
          <Text h4>INSTRUCTOR</Text>
          <RNPickerSelect
            onValueChange={(value) => handleChangeText(value,'instructor')}
            value={state.value}
            items={[
              { label: 'Franco Etcheverry', value: 'Franco Etcheverry' },
              { label: 'Toni Tralice', value: 'Toni Tralice' },
            ]}
          />
        </ListItem>

        <ListItem>
          <Text h4>NUMERO DE GRUPOS</Text>
          <Input 
          placeholder='00'
          onChangeText={(value) => handleChangeText(value,'numero_de_grupo')}
           />
        </ListItem>

        <ListItem>
          <Icon name='account-group' type='material-community' />
          <ListItem.Content>
            <ListItem.Title>ALUMNOS</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={() => navigation.navigate('Listado de Alumnos sin Cohorte',{ alumnos: state.alumnos, setState:{setState} })} />
        </ListItem>

        <Button 
        title="CREAR COHORTE"
        onPress={() => saveNewCohorte()} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
	header    : {
		display         : 'flex',
		flexDirection   : 'row',
		alignItems      : 'center',
		backgroundColor : '#e5e500'
	},
	container : {
		//border: 'solid 2px grey',
		padding       : '7px',
		display       : 'flex',
		flexDirection : 'row'
	},
	image     : {
		display       : 'flex',
		flexDirection : 'column'
	},
	text      : {
		padding       : '10px',
		width         : '60%',
		display       : 'flex',
		flexDirection : 'column'
	}
});

export default CrearCohorte;
