import React, { useEffect, useState } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import firebase from '../../database/database';

//Redux importamos funciones y hooks
import {useSelector} from 'react-redux';

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
  GroupCard,
  Titulo,
  Img,
  Imagen,
  User,
  Pm,
  TituloPm,
  Tarjeta,
  TarjetaPm,
  Progreso,
  TarjetaProgreso
} from './StyledYourCohort';

import Footer from '../Footer';
import { ScrollView } from 'react-native';

let card3 = require('../../src/assets/img/imgCard3.png');
let card2 = require('../../src/assets/img/imgCard2.png');
let userImg = require('../../src/assets/img/user.png');

const YourCohort = (props, {navigation}) => {
  const  checkpoint4  = 5;
  //Asignamos lo que tenemos en el store a la constante info 
  const info = useSelector(state => state)
  const [user, setUser] = useState(info);
  const [users, setUsers] = useState([]);

  useEffect(() => {
		firebase.db.collection('users').onSnapshot((snap) => {
			const estudiantes = [];
			snap.docs.forEach((doc) => {
        const { cohorte, rol, grupo, pm, instructor, progreso } = doc.data();
        console.log(grupo)
				if (rol === 'student') {
					estudiantes.push({
            cohorte,
            grupo,
            pm,
            instructor,
            progreso,
						id : doc.id
					});
				}
			});
console.log(estudiantes);
			setUsers(estudiantes);
		});
	}, []);
  
  return (
    <Contenedor>
      <Encabezado>
        <Home
          onPress={() => props.navigation.navigate('Menu Usuario')}
        >
          <Icon
            solid={true}
            name='chevron-left'
            type='font-awesome-5'
          />
          <TextTitle>Home</TextTitle>
        </Home>
      </Encabezado>
      <View style = {{alignItems: 'center', bottom: '10%', zIndex:100}}>
      <Options>
        <BackImg>
          <ImgSize source={card3} />
        </BackImg>
        <ContText>
          {
            !user.cohorte ? 
            <TituloCard>Aún no tienes asignado Cohorte</TituloCard>
            :
            <TituloCard>Tu Cohorte es el N°{user.cohorte}</TituloCard>
          }
          <Text>Conoce quien es tu Instructor, a tus PM´s y a tu grupo de Cohorte...</Text>
        </ContText>
      </Options>
      </View>

      <ScrollView>
      <ContGeneral>         
        {/* GRUPO AL QUE PERTENECES */}
        <GroupCard>
          <Tarjeta >
            <Titulo>
              <Text style={styles.text}>Grupo al que perteneces</Text>
            </Titulo>
            <Img>
            {
              !user.grupo ? 
              <Text style={styles.titulo}>Aún no tienes asignado un grupo</Text> :
              <Text style={styles.titulo}>G - {`${user.grupo}`}</Text>
            }
              <Imagen source={card2} />
            </Img>
          </Tarjeta>        

        {/* INSTRUCTOR DEL COHORTE */}
          <Tarjeta>
            <Titulo>
              <Text style={styles.text}>Instructor del Cohorte</Text>
            </Titulo>
            <Img>
            {
              !user.instructor ? 
              <Text style={styles.instructor}>Sin instructor aún</Text> :
              <Text style={styles.instructor}>{`${user.instructor}`}</Text>
            }
            {
              !user.instructor ? <Text>Sin imagen</Text> : 
            <User source={userImg} />
            }
            </Img>
          </Tarjeta>
        </GroupCard>

        {/* TUS PM´S */}
        <Pm>
          <TarjetaPm>
            <TituloPm>
              <Text style={styles.text}>Tus PM's</Text>
            </TituloPm>
            <Img style={{ flexDirection: 'row' }}>
                <View style={styles.usuario}>
                <Text style={styles.instructor}>{user.pm}</Text>
                <User source={userImg} />
                </View>          
            </Img>
          </TarjetaPm>
        </Pm>
  


        {/* TU PROGRESO */}
        <Progreso>
          <TarjetaProgreso>
            <TituloPm>
              <Text style={styles.text}>Tu progreso</Text>
            </TituloPm>
            <Img style={{ flexDirection: 'row' }}>
            
            {
              checkpoint4 >= 7 && checkpoint4 <=10 ?
              <View style={styles.usuario}>
              <Image
                style={styles.desahabilitado}
                source={{ uri: 'https://www.soyhenry.com/static/bootcamp-69298120cfbbd3bd82368b797b6a770d.png' }} />
              <Text style={styles.progreso}>Bootcamp</Text>
            </View> 
            :
              <View style={styles.usuario}>
                <Image
                  style={styles.habilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/bootcamp-69298120cfbbd3bd82368b797b6a770d.png' }} />
                <Text style={styles.progreso}>Bootcamp</Text>
              </View>               
            }
            { 
            checkpoint4 >= 7 && checkpoint4 <=10 ?
              <View style={styles.usuario}>
                <Image
                  style={styles.desahabilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/labs-a68a48d9c1525b60d5d1e874278d88a1.png' }} />
                <Text style={styles.progreso}>Labs</Text>
              </View> 
              :
              <View style={styles.usuario}>
                <Image
                  style={styles.habilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/labs-a68a48d9c1525b60d5d1e874278d88a1.png' }} />
                <Text style={styles.progreso}>Labs</Text>
              </View>
            }
            {
              checkpoint4 >= 7 && checkpoint4 <=10 ?
              <View style={styles.usuario}>
                <Image
                  style={styles.desahabilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/henryx-42b7eae92b75799f6220f3d659bcaea3.png' }} />
                <Text style={styles.progreso}>HenryX</Text>
              </View> 
              :
              <View style={styles.usuario}>
                <Image
                  style={styles.habilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/henryx-42b7eae92b75799f6220f3d659bcaea3.png' }} />
                <Text style={styles.progreso}>HenryX</Text>
              </View>
            }
            {
              checkpoint4 >= 7 && checkpoint4 <=10 ?
              <View style={styles.usuario}>
                <Image
                  style={styles.desahabilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/rocket-176b443ed273a2a5a6f5cb11d6d33605.png' }} />
                <Text style={styles.progreso}>Job Prep</Text>
              </View>
              :
              <View style={styles.usuario}>
                <Image
                  style={styles.habilitado}
                  source={{ uri: 'https://www.soyhenry.com/static/rocket-176b443ed273a2a5a6f5cb11d6d33605.png' }} />
                <Text style={styles.progreso}>Job Prep</Text>
              </View>
            }        
            </Img>
          </TarjetaProgreso>
        </Progreso>
      </ContGeneral>
      </ScrollView>
      <Footer navigation={props.navigation}/>
    </Contenedor>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 12
  },
  titulo: {
    fontSize: 15,
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 15
  },
  instructor: {
    fontSize: 12,
    fontWeight: '700',
    marginBottom: 25
  },
  usuario: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 15,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  progreso: {
    fontSize: 12,
    fontWeight: '700',
    marginTop: 20,
    // paddingLeft: 2,
    // paddingRight: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  habilitado: {
    width: 50,
    height: 50,
    opacity: 0.3
  },
  desahabilitado: {
    width: 50,
    height: 50,
  }
})

export default YourCohort;
