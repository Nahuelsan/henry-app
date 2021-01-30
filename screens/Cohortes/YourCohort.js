import React, { useEffect } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from '../../database/database';

/* Estilos */
import {
  Contenedor,
  Encabezado,
  Home,
  TextTitle,
  Options,
  BackImg,
  ImgSize,
  ContText,
  TituloCard,
  ContGeneral,
  Cohorte,
  GroupCard,
  Titulo,
  Img,
  Imagen,
  User,
  Pm,
  TituloPm
} from './StyledYourCohort';

import {
  ContMinf,
  IconContent,
  ImgMinf,
  LogoSise,
} from '../Estudiantes/StyledEstudents';

let card3 = require('../../src/assets/img/imgCard3.png');
let card2 = require('../../src/assets/img/imgCard2.png');
let user = require('../../src/assets/img/user.png');
let logFont = require('../../src/assets/img/henry_logo.jpg');

const YourCohort = ({ navigation }) => {
  return (
    <Contenedor>
      <Encabezado>
        <Home
          onPress={() => console.log('Home')}
        >
          <Icon
            solid={true}
            name='chevron-left'
            type='font-awesome-5'
          />
          <TextTitle>Home</TextTitle>
        </Home>
      </Encabezado>
      <Options>
        <BackImg>
          <ImgSize source={card3} />
        </BackImg>
        <ContText>
          <TituloCard>Tu Cohorte</TituloCard>
          <Text>Conoce quien es tu Instructor, a tus PM´s y atu grupo de Cohorte...</Text>
        </ContText>
      </Options>
      <ContGeneral>
        <Cohorte>Cohorte { }</Cohorte>
        <GroupCard>
          <View>
            <Titulo>
              <Text style={styles.text}>Grupo al que perteneces</Text>
            </Titulo>
            <Img>
              <Text style={styles.titulo}>G - { }</Text>
              <Imagen source={card2} />
            </Img>
          </View>
        </GroupCard>
        <GroupCard style={{ marginLeft: 350 }}>
          <View>
            <Titulo>
              <Text style={styles.text}>Instructor del Cohorte</Text>
            </Titulo>
            <Img>
              <Text style={styles.instructor}>{ }</Text>
              <User source={user} />
            </Img>
          </View>
        </GroupCard>
        <Pm style={{ marginTop: 140, position: 'absolute' }}>
          <View>
            <TituloPm>
              <Text style={styles.text}>Tus PM's</Text>
            </TituloPm>
            <Img style={{ flexDirection: 'row' }}>
              <View style={styles.usuario}>
                <Text style={styles.instructor}>{ }</Text>
                <User source={user} />
              </View>
            </Img>
          </View>
        </Pm>


        <Pm style={{ marginTop: 280, position: 'absolute' }}>
          <View>
            <TituloPm>
              <Text style={styles.text}>Tu progreso</Text>
            </TituloPm>
            <Img style={{ flexDirection: 'row' }}>
              <View style={styles.usuario}>
                <Image
                  style={styles.imagenes}
                  source={{ uri: 'https://www.soyhenry.com/static/bootcamp-69298120cfbbd3bd82368b797b6a770d.png' }} />
                <Text style={styles.progreso}>Bootcamp</Text>
              </View>
              <View style={styles.usuario}>
                <Image
                  style={styles.imagenes}
                  source={{ uri: 'https://www.soyhenry.com/static/labs-a68a48d9c1525b60d5d1e874278d88a1.png' }} />
                <Text style={styles.progreso}>Labs</Text>
              </View>
              <View style={styles.usuario}>
                <Image
                  style={styles.imagenes}
                  source={{ uri: 'https://www.soyhenry.com/static/henryx-42b7eae92b75799f6220f3d659bcaea3.png'}} />
                <Text style={styles.progreso}>HenryX</Text>
              </View>
              <View style={styles.usuario}>
                <Image
                  style={styles.imagenes}
                  source={{ uri: 'https://www.soyhenry.com/static/rocket-176b443ed273a2a5a6f5cb11d6d33605.png' }} />
                <Text style={styles.progreso}>Job Prep</Text>
              </View>
            </Img>
          </View>
        </Pm>
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
  text: {
    fontSize: 15,
    fontWeight: 700,
  },
  titulo: {
    fontSize: 15,
    fontWeight: 700,
  },
  instructor: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 25
  },
  usuario: {
    paddingLeft: 12,
    paddingRight: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  progreso: {
    fontSize: 12,
    fontWeight: 700,
    marginTop: 20,
    // paddingLeft: 2,
    // paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagenes: {
    width: 50,
    height: 50
  }
})

export default YourCohort;