import React, {useEffect, useState} from 'react';
import {Text, ScrollView, Image} from 'react-native';
import { Icon, ListItem} from 'react-native-elements';
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
import firebase from '../../database/database';

const AlumnosCohorte = ({navigation, route}) => {

    const [alumnos, setAlumnos] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot((query) =>{
            var data = []
            query.docs.forEach((docs) => {
                const {cohorte, dni, email, first_name, grupo, last_name, nacionalidad, phone, photo} = docs.data()
                if(route.params.nombre === cohorte){
                    data.push({
                        cohorte, 
                        dni, 
                        email, 
                        first_name, 
                        grupo, 
                        last_name, 
                        nacionalidad, 
                        phone,
                        photo
                    });
                }
            });
            setAlumnos(data);
        });
    }, []);
    console.log(alumnos)
    return(
        <Contenedor>
            <Encabezado>
                <ConTitle
                    onPress={() => navigation.goBack()}
                >          
                <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                />
                <TextTitle>Cohorte {route.params.nombre}</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise/>
                </BackImg>
                <ContText>
                    <TituloCard>Alumnos</TituloCard>
                    <Text>Listado de los alumnos</Text>
                </ContText>
            </Options>
            <ContGeneral>
        <ContListGen>
          {alumnos.map((l, i) => (
            <ListItem key={i} style={{ width: '100%', }}>
              <BodyUnitItem >

                  <ImgListUn source={l.photo} />

                <ContText>
                  <TextPrin>{`${l.last_name} ${l.first_name}`}</TextPrin>
                  <Text>{`${l.email}`}</Text>
                </ContText>
              </BodyUnitItem>
            </ListItem>
          ))}
        </ContListGen>
            {/* Menu inferior General */}
            
        </ContGeneral>
        </Contenedor>
    )
}

export default AlumnosCohorte;


