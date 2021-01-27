import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image, Icon, ListItem, Input, Button, ButtonGroup } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
//import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePicker from "react-native-modal-datetime-picker";

/* Estilos */
import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  ContGeneral,
  ContListGen,
  Options,
  BackImg,
  ContText,
  TituloCard,
  ContMinf,
  ContBtnOut,
  IconContent,
  ImgMinf,
  ImgSise,
  TextButtonOp2,
  ContPirnTable,
  TextContTable,
  LogoSise,
  BotonLog,
  ImgListUn,
  TextButton
} from './StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');


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
		fecha_de_inicio: '00/00/0000',
		fecha_de_finalizacion: '00/00/0000',
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
    <Contenedor>
      <Encabezado >
			  <ConTitle
          onPress={() => navigation.navigate('Henry Admin')}
        >
          <Icon
						solid={true}
            name="chevron-left"
						type="font-awesome-5"
          />
          <TextTitle>Home</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Crear Cohorte</TituloCard>
          <Text>Alumnos que inician en henry los cuales no cuentan con ninguna asignación</Text>
        </ContText>
      </Options> 
      <ContGeneral>
        <ContListGen>
          <ContPirnTable>
            <View>
              <TextContTable>COHORTE N°</TextContTable>
            </View>
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
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>MODALIDAD</TextContTable>
            </View>
            <ContBtnOut >
              <BotonLog onPress={()=> updateIndex(0)}>
                <TextButtonOp2>Full Time</TextButtonOp2>
              </BotonLog>
              <BotonLog onPress={()=> updateIndex(1)} >
                <TextButtonOp2>Part Time</TextButtonOp2>
              </BotonLog>
            </ContBtnOut>
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>FECHA DE INICIO</TextContTable>
            </View>
            <View>
              <Text>{state.fecha_de_inicio}</Text>
              <Icon
                name='calendar-sharp'
                type='ionicon'
                size={40}
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
            </View>
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>FECHA DE FINALIZACION</TextContTable>
            </View>
            <View>
              <Text>{state.fecha_de_finalizacion}</Text>
              <Icon
                name='calendar-sharp'
                type='ionicon'
                size={40}
                onPress={showDateTimePicker} 
              />
              <DateTimePicker
                mode='date'
                display="default"
                style={{ width: 320, backgroundColor: "white" }}
                isVisible={isVisible}
                name='fecha_de_finalizacion'
                onConfirm={handleDatePicked}
                onCancel={hideDateTimePicker}
              />
            </View>
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>INSTRUCTOR</TextContTable>
            </View>
            <RNPickerSelect
              onValueChange={(value) => handleChangeText(value,'instructor')}
              value={state.value}
              items={[
                { label: 'Franco Etcheverry', value: 'Franco Etcheverry' },
                { label: 'Toni Tralice', value: 'Toni Tralice' },
              ]}
            />
          </ContPirnTable>

          <ContPirnTable>
            <View>
              <TextContTable>NUMERO DE GRUPOS</TextContTable>
            </View>
            <Input 
            placeholder='00'
            onChangeText={(value) => handleChangeText(value,'numero_de_grupo')}
            />
          </ContPirnTable>

          <ContPirnTable onPress={() => navigation.navigate('Listado de Alumnos sin Cohorte',{ alumnos: state.alumnos, state:state })}>
            <View>
              <TextContTable>ALUMNOS</TextContTable>
            </View>
            <Icon name='account-group' type='material-community' size={40} />
          </ContPirnTable>
          <BotonLog onPress={saveNewCohorte}>
            <TextButton>CREAR COHORTE</TextButton>
          </BotonLog>
        </ContListGen>
        <ContMinf>
            <IconContent>
              <Icon
                name="home"
                type="font-awesome"
                size={40}
                onPress={() => props.navigation.navigate('Henry Admin')}
              />
              <Icon
                name="ghost"
                type="font-awesome-5"
                size={40}
                onPress={() => props.navigation.navigate('Henry Admin')}
              />
              <ImgMinf>
                <LogoSise source={logFont} />
              </ImgMinf>
              <Icon
                solid={true}
                name="comment-dots"
                type="font-awesome-5"
                size={40}
                onPress={() => props.navigation.navigate('Henry Admin')}
              />
              <Icon
                solid={true}
                name="user"
                type="font-awesome-5"
                size={40}
                onPress={() => props.navigation.navigate('Henry Admin')}
              />
            </IconContent>
          </ContMinf>
      </ContGeneral>
    </Contenedor>
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
