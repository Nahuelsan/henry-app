import React, { useState, useEffect } from 'react'; 
import { StyleSheet, View, Button, Alert } from 'react-native';
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
    ContBtnOut,
    TextPrin,
    ImgSise,
    TextButtonOp2,
    ContPirnTable,
    TextContTable,
    BotonLog,
    TextButton,
    BodyUnitItem
} from '../Cohortes/StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
import firebase from '../../database/database';

import Footer from '../Footer';

  

const ListaPms = (props) =>{
    var bar_pm = []

    useEffect(() => {
        firebase.db.collection('cohorte').where("nombre", "==", props.route.params.cohorte).onSnapshot((snap) => {
            let coh = [];
            snap.docs.forEach((doc) => {
                const {comienzo, fin, instructor, modalidad, nombre} = doc.data()
                coh.push({
                    comienzo, 
                    fin, 
                    instructor, 
                    modalidad, 
                    nombre,
                    id: doc.id
                })
            });
            firebase.db.collection('cohorte').doc(coh[0].id).collection('grupos')
            .get()
            .then(querySnapshot=>{
                querySnapshot.forEach(doc => {
                    const {pms} = doc.data()
                    const {first_name, id, last_name} = pms
                    bar_pm.push(
                        first_name,
                        last_name,
                        id
                    ) 
                })
            })

        });
    }, []);
    const eliminar = async (pm) =>{

        const dbRef = firebase.db.collection('users').doc(pm.id);
        if (confirm('Esta seguro de querer eliminar este PMs?')) {
			await dbRef.set({
                cohorte: '',
                grupo: ''
            });
			alert('Se quito al PM del Cohorte');
        }
		else {
        }
        
        Alert.alert(
                'Esta Eliminando un Usuario',
                'Esta seguro de querer eliminar este Usuario',
                [
                    {
                        text    : 'Cancel',
                        onPress : () => console.log('Cancel Pressed'),
                        style   : 'cancel'
                    },
                    {
                        text    : 'OK',
                        onPress : async () => {
                await dbRef.delete();   
                navigation.navigate('Henry Admin');         
                        }
                    }
                ],
                { cancelable: false }
            ); 
    }
    return (
        <Contenedor >
            <Encabezado >
                <ConTitle
                onPress={() => props.navigation.goBack()}
                >
                <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                />
                <TextTitle>Lista de PM</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>PMs de este cohortes</TituloCard>
                    <Text>Puedes ver los PMs de este cohorte</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    <View>
                    {bar_pm[0].last_name}
                    </View>
                    <ContBtnOut >
                        <BotonLog onPress={() => console.log(bar_pm)}>
                            <TextButton>Agregar PM</TextButton>
                        </BotonLog>
                    </ContBtnOut>
                </ContListGen>
                <Footer navigation={props.navigation}/>
            </ContGeneral>
        </Contenedor>
    );
}
export default ListaPms;