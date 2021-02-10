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
    ContMinf,
    ContBtnOut,
    IconContent,
    TextPrin,
    ImgSise,
    TextButtonOp2,
    ContPirnTable,
    TextContTable,
    LogoSise,
    BotonLog,
    TextButton,
    BodyUnitItem
} from '../Cohortes/StyledCohorteList';
let card1 = require('../../src/assets/img/imgCard1.png');
import firebase from '../../database/database';


const ListaPms = (props) =>{

    const [pms, setPms] = useState([])
    useEffect(() => {
        firebase.db.collection('users').where('rol', '==', 'pm').onSnapshot((snap) => {
            const PMs = [];
            snap.docs.forEach((doc) => {
                const {last_name, first_name, cohorte, email} = doc.data()
                if(props.route.params.cohorte === cohorte){
                    PMs.push({
                        last_name,
                        first_name,
                        cohorte,
                        email,
                        id: doc.id,
                    })
                    pms.push({
                        last_name,
                        first_name,
                        cohorte,
                        email,
                        id: doc.id,
                    })
                }
            });
            setPms(PMs)
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
        <Contenedor style={styles.container}>
            <Encabezado >
                <ConTitle
                onPress={() => props.navigation.goBack()}
                >
                <Icon
                    solid={true}
                    name="chevron-left"
                    type="font-awesome-5"
                />
                <TextTitle>Grupos PP</TextTitle>
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
                    {
                        pms.map((pm, i) => (
                            <ListItem key={i} style={{ width: '100%', }}>
                            <BodyUnitItem >
                              <ContText>
                                  {console.log(pm)}
                                  <Text>Hola</Text>
                                <TextPrin>{`${pm.last_name} ${pm.first_name}`}</TextPrin>
                              </ContText>
                              <ContBtnOut >
                                  <BotonLog onPress={() => eliminar(pm)}>
                                    <TextButton>Eliminar de este cohorte</TextButton>
                                  </BotonLog>
                                </ContBtnOut>
                            </BodyUnitItem>
                          </ListItem>
                        ))
                    }
                </ContListGen>
            </ContGeneral>
            {
                pms.length === 0 && <ContBtnOut >
                <BotonLog onPress={() => console.log(pms)}>
                  <TextButton>Agregar PM</TextButton>
                </BotonLog>
              </ContBtnOut>
            }
            <View>
            </View>
        </Contenedor>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e5e500'
    },
    marco: {
        backgroundColor: '#e5e500',
        textAlign: 'center'
    },
    text: {
        fontSize: 30
    },
    avatar: {
        width: 100,
        height: 100
    },
    pm: {
        /* fontWeight : 700, */
        fontSize: 20
    }
});

export default ListaPms;