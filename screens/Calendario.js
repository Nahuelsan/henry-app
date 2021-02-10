import React, { useEffect, useState } from 'react';
import { Text, Linking, TouchableOpacity, ScrollView, View, ActivityIndicator, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'
import { useSelector } from 'react-redux';
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
    ImgSise,
} from './Cohortes/StyledCohorteList'
import firebase from '../database/database';

let card1 = require('../src/assets/img/imgCard1.png');




const Calendario = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [calendar, setCalendar] = useState([])
    const cohorte = useSelector(state => state.cohorte)
    const dbRef = firebase.db.collection('cohorte')
    useEffect(() => {
        dbRef.onSnapshot(snap => {
            snap.docs.forEach(doc => {
                const { nombre } = doc.data()
                if (cohorte === nombre) traerClases(doc.id)
            })
        })
    }, [])
    console.log(calendar)
    const traerClases = id => {
        dbRef.doc(id).collection('clases').onSnapshot(snap => {
            let clases = []
            snap.docs.forEach(doc => {
                const { clase, link, tema } = doc.data()
                clases.push({
                    clase, link, tema
                })
            })
            setLoading(false)
            setCalendar(clases)
        })
    }

    const OpenURLButton = ({ url, title, link }) => {
        const handlePress = async () => {
            const supported = await Linking.canOpenURL(url)
            if (supported) {
                await Linking.openURL(url)
            } else {
                Alert.alert(`No se puede abrir esta URL: ${url}`)
            }
        }
        return (<TouchableOpacity onPress={handlePress} style={s.containerLink}>
            <Text>clase {title}:<Text style={s.link}>{link}</Text></Text>
        </TouchableOpacity>)
    }

    return loading ? (
        <ActivityIndicator
            size="large"
            style={{
                flex: 1,
                aligntContent: "center",
                justifyContent: "center",
            }}
        />
    ) : (
        <Contenedor>
            <Encabezado>
                <ConTitle onPress={() => navigation.goBack()}>
                    <Icon
                        solid={true}
                        name="chevron-left"
                        type="font-awesome-5"
                    />
                    <TextTitle>Calendario</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>Calendario del cohorte {cohorte}</TituloCard>
                    <Text>Conoce la agenda de actividades de tu cohorte</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    <ScrollView style={s.container}>
                        {calendar.length ? calendar.map(clas => (
                            <View key={clas.clase}>
                                <OpenURLButton url={clas.link} title={clas.clase} link={clas.tema} />
                            </View>
                        )) : (
                            <View>
                                <Text>
                                    Todavia no hay clases, estamos preparando todo
                                </Text>
                            </View>
                        )}
                    </ScrollView>
                </ContListGen>
            </ContGeneral>
        </Contenedor>
    )
}

export default Calendario;

const s = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center"
    },
    containerLink: {
        padding: 15,
    },
    link: {
        color: "blue",
    }
})