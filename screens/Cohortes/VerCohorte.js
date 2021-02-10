import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

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
  TextButton
} from './StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');


const VerCohorte = (props) => {
  const { comienzo, descripcion, fin, modalidad, nombre, instructor, id } = props.route.params.cohorte;
console.log(props.route.params.cohorte)
  return (
    <Contenedor>
      <Encabezado >
        <ConTitle
          onPress={() => props.navigation.navigate('Lista de Cohortes')}
        >
          <Icon
            solid={true}
            name="chevron-left"
            type="font-awesome-5"
          />
          <TextTitle>Cohortes</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Detales de Cohorte</TituloCard>
          <Text>Detalle completo del Cohorte {nombre}</Text>
        </ContText>
      </Options>
      <ContGeneral>
        <ContListGen>

          <ContPirnTable>
            <View>
              <TextContTable>COHORTE N° {nombre}</TextContTable>
              <TextContTable>{descripcion}</TextContTable>
              <TextContTable>Fecha de inicio: {comienzo} </TextContTable>
              <TextContTable>Fecha de finalizacion: {fin}</TextContTable>
              <TextContTable>Modalidad: {modalidad}</TextContTable>
              <TextContTable>Instructor: {instructor}</TextContTable>
            </View>
          </ContPirnTable>

          <BotonLog onPress={() => props.navigation.navigate('Alumno Cohorte', {nombre: nombre})}>
            <TextButton onPress={() => props.navigation.navigate('Alumno Cohorte', {nombre: nombre})}>Alumnos</TextButton>
          </BotonLog>

          <BotonLog onPress={() => props.navigation.navigate("Lista PMs", {cohorte: nombre})}>
            <TextButton onPress={() => props.navigation.navigate("Lista PMs", {cohorte: nombre})}>PMs</TextButton>
          </BotonLog>

          <BotonLog onPress={() => props.navigation.navigate('Crear Grupos', {cohorte: props.route.params.cohorte})}>
            <TextButton onPress={() => props.navigation.navigate('Crear Grupos', {cohorte: props.route.params.cohorte})}>Crear Nuevo Grupo</TextButton>


          <BotonLog onPress={() => props.navigation.navigate('Modificar Clases', {cohorte: nombre})}>
            <TextButton>Clases</TextButton>
          </BotonLog>

          </BotonLog>

          <BotonLog onPress={() => props.navigation.navigate("Grupos PP", {cohorte: nombre})}>
            <TextButton onPress={() => props.navigation.navigate("Grupos PP", {cohorte: nombre})}>CRUD de PP</TextButton>
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

export default VerCohorte;