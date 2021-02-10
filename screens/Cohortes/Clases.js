import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, StyleSheet, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import firebase from '../../database/database'

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

const ModificarClases = (props) => {
    const { nombre } = props.route.params
    const [clas, setClas] = useState()
    const [docId, setDocId] = useState()
    const [loading, setLoading] = useState(true)
    const [modify, setModify] = useState({ view: false })
    const dbRef = firebase.db.collection('cohorte')

    useEffect(() => {
        dbRef.where("nombre", "==", nombre).onSnapshot(snap => {
            snap.docs.forEach(doc => {
                clases(doc.id)
            })
        })
    }, [])

    const clases = id => {
        setDocId(id)
        dbRef.doc(id).collection('clases').onSnapshot(snap => {
            let clases = []
            snap.docs.forEach(doc => {
                const { clase, link, tema } = doc.data()
                clases.push({
                    clase,
                    link,
                    tema,
                    id: doc.id
                })
            })
            setClas(clases)
            setLoading(false)
        })
    }

    const modifyNewClass = () => {
        var max = 1
        for(var i = 0; i < clas.length; i++){
            if(clas[i].clase > max) max = clas[i].clase
        }
        setModify({
            view: true,
            id: null,
            clase: parseInt(max) + 1,
            tema: "",
            link: "",
            modify: false
        })
    }

    const handleConfirm = () => {
        dbRef.doc(docId).collection('clases').doc(modify.id).set({
            link: modify.link,
            clase: modify.clase,
            tema: modify.tema
        })
        clases(docId)
        setModify({view: false})
    }

    const addClass = () => {
        if(!modify.tema) return alert('Elige un tema para la clase')
        if(!modify.link) return alert('Proporciona un link para poder acceder a la clase')
        dbRef.doc(docId).collection('clases').add({
            link: modify.link,
            clase: modify.clase,
            tema: modify.tema
        })
        clases(docId)
        setModify({view: false})
    }

    return loading ? <ActivityIndicator size="large" style={{ flex: 1, alignContent: "center", justifyContent: "center" }} /> : (
        <Contenedor>
            <Encabezado >
                <ConTitle onPress={() => props.navigation.goBack()}>
                    <Icon
                        solid={true}
                        name="chevron-left"
                        type="font-awesome-5"
                    />
                    <TextTitle>Clases</TextTitle>
                </ConTitle>
            </Encabezado>
            <Options>
                <BackImg>
                    <ImgSise source={card1} />
                </BackImg>
                <ContText>
                    <TituloCard>Clases del cohorte</TituloCard>
                    <Text>Modifica las clases del cohorte {nombre}</Text>
                </ContText>
            </Options>
            <ContGeneral>
                <ContListGen>
                    <ContPirnTable style={s.container}>
                        {clas.sort((a, b) => parseInt(a.clase) - parseInt(b.clase)).map(c => (
                            <View key={c.id} style={s.line}>
                                <TextContTable style={{padding: 5}}>Clase {c.clase}: {c.tema}</TextContTable>
                                <BotonLog
                                    onPress={() => setModify({
                                        view: true,
                                        id: c.id,
                                        clase: c.clase,
                                        tema: c.tema,
                                        link: c.link,
                                        modify: true
                                    })}
                                >
                                    <TextButton>Modificar</TextButton>
                                </BotonLog>
                            </View>
                        ))}
                        <BotonLog
                            style={{padding: 5,}}
                            onPress={modifyNewClass}
                        >
                            <TextButton>Agregar Clase</TextButton>
                            </BotonLog>
                    </ContPirnTable>
                </ContListGen>
            </ContGeneral>
            {modify.view &&
                <View style={s.view}>
                    <View style={s.container_class}>
                        <ConTitle onPress={() => setModify({ view: false })} style={s.icon}>
                            <Icon
                                solid={true}
                                name="times"
                                type="font-awesome-5"
                            />
                        </ConTitle>
                        <Text style={s.title}>Clase {modify.clase}</Text>
                        <View style={s.container_input}>
                            <Text>Tema:</Text>
                            <TextInput
                                value={modify.tema}
                                placeholder="Tema de la clase"
                                onChangeText={text => setModify({
                                    ...modify,
                                    tema: text
                                })}
                                style={s.input}
                            />
                        </View>
                        <View style={s.container_input}>
                            <Text>Link: </Text>
                            <TextInput
                                value={modify.link}
                                placeholder="Link de la clase"
                                onChangeText={text => setModify({
                                    ...modify,
                                    link: text
                                })}
                                style={s.input}
                            />
                        </View>
                        <View style={s.container_btn}>
                        {modify.modify && <BotonLog><TextButton>Borrar clase</TextButton></BotonLog>}
                        <BotonLog onPress={modify.modify ? handleConfirm : addClass}><TextButton>Confirmar cambios</TextButton></BotonLog>
                        </View>
                    </View>
                </View>
            }
        </Contenedor>
    )
}

export default ModificarClases

const s = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    line: {
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "80%",
        padding: 10,
    },
    view: {
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, .2)",
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "space-evenly",
        alignContent: "center",
        zIndex: 1000
    },
    container_class: {
        width: "85%",
        maxHeight: "70%",
        backgroundColor: "white",
        flex: 1,
        justifyContent: "space-around",
        alignContent: "center",
        margin: "auto",
        borderRadius: 8,
        padding: 50,
    },
    icon: {
        alignSelf: "flex-end",
    },
    title: {
        padding: 10,
    },
    container_input: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    input: {
        width: "50%",
        maxHeight: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    container_btn: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
    },
})