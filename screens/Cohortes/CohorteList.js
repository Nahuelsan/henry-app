import React, { useEffect, useState } from 'react';
import { Icon, ListItem, Text } from 'react-native-elements';
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
  TextPrin,
  BodyUnitItem,
  LogoSise,
  BotonLog,
  ImgListUn,
  TextButton
} from './StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');

import firebase from '../../database/database';

const CohorteList = ({ navigation }) => {
  const [
    cohorte,
    setCohorte
  ] = useState([]);
  useEffect(() => {
    firebase.db.collection('cohorte').onSnapshot((query) => {
      var data = [];
      query.docs.forEach((docs) => {
        const { comienzo, descripcion, fin, modalidad, nombre } = docs.data();
        data.push({
          id: docs.id,
          comienzo,
          descripcion,
          fin,
          modalidad,
          nombre
        });
      });
      setCohorte(data);
    });
  }, []);

  const onPressSee = () => { };
  const onPressEdit = () => { };

  return (
    <Contenedor>
      <Encabezado >
        <ConTitle
          onPress={() => navigation.goBack()}         
        >
          <Icon
            solid={true}
            name="chevron-left"
            type="font-awesome-5"
          />
          <TextTitle>Admin Henry</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Cohortes</TituloCard>
          <Text>Historial de todas las cohortes de Henry</Text>
        </ContText>
      </Options>
      {/* <Text h2> Listado de cohortes</Text> */}
      <ContGeneral>
        <ContListGen>
          {cohorte.map((l, i) => (
            <ListItem key={i} style={{ width: '100%', }}>
              <BodyUnitItem >
                <BackImg>
                  <ImgListUn source={logFont} />
                </BackImg>
                <ContText>
                  <TextPrin>{`Cohorte ${l.nombre}`}</TextPrin>
                  <Text>{`Comienzo ${l.comienzo}`} - {`Fin ${l.fin}`}</Text>
                  <ContBtnOut >
                    <BotonLog onPress={() => navigation.navigate('Ver Cohorte',
                      { comienzo: l.comienzo, descripcion: l.descripcion, fin: l.fin, modalidad: l.modalidad, nombre: l.nombre })}>
                      <TextButton>Ver</TextButton>
                    </BotonLog>
                    <BotonLog onPress={() => navigation.navigate('Crear Cohorte',
                      { comienzo: l.comienzo, descripcion: l.descripcion, fin: l.fin, modalidad: l.modalidad, nombre: l.nombre })}> 
                      <TextButton>Editar</TextButton>
                    </BotonLog>
                  </ContBtnOut>
                </ContText>
              </BodyUnitItem>
            </ListItem>
          ))}
        </ContListGen>
        {/* Menu inferior General */}
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
  );
};
export default CohorteList;
