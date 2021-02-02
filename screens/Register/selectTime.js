import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from '../../database/database'

const selectTime = (props) => {
    const {email} = props.route.params
    const [cohortes, setCohortes] = useState('')
    const [modal, setModal] = useState('')
    const dbRef = firebase.db.collection('cohorte')

    useEffect(() => {
        dbRef.onSnapshot(snap => {
            let cohorteFull = {}
            let cohortePart = {}
            snap.docs.forEach(doc => {
                const {nombre, comienzo, modalidad} = doc.data()
                const cohorte = {
                    nombre, comienzo, modalidad, id: doc.id
                }
                if(modalidad === 'Full Time'){
                    if(!cohorteFull.length) cohorteFull = cohorte
                    else if(cohorteFull.nombre < nombre) cohorteFull = cohorte
                }
                if(modalidad === 'Part Time'){
                    if(!cohortePart.length) cohortePart = cohorte
                    else if(cohortePart.nombre < nombre) cohortePart = cohorte
                }
            })
            setCohortes({
                fullTime: cohorteFull,
                partTime: cohortePart
            })
        })
    }, [])

    const toForm = async () => {
        if(!modal) return alert('Selecciona una modalidad')
        else{
            let newDate = new Date()
            newDate = newDate.toDateString().split(" ")
            let month = getMonthOfDate(newDate[1])
            let day = newDate[2]
            let age = newDate[3]
            let start = cohortes[modal].comienzo.split("/")
            if(start[2] >= age){
                if(start[1] > month){
                    props.navigation.navigate('Formulario Datos', {
                        email: email,
                        instructor: false,
                        cohorte: cohortes[modal].nombre
                    }) 
                }else if(start[1] > month){
                    if(start[0] >day){
                        props.navigation.navigate('Formulario Datos', {
                            email: email,
                            instructor: false,
                            cohorte: cohortes[modal].nombre
                        }) 
                    }
                }
            }else return alert('Tu cohorte todavia no esta preparado')
        }
    }

    const getMonthOfDate = name => {
        return ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3 + 1)
    }

	return(
		<View style={s.container}>
            <Text style={s.title}>Que modalidad quieres cursar?</Text>
            <View style={s.container_btns}>
                <TouchableOpacity style={s.btns} onPress={() => setModal('fullTime')}>
                    <Text>Full Time</Text>
                </TouchableOpacity>
                <TouchableOpacity style={s.btns} onPress={() => setModal('partTime')}>
                    <Text>Part Time</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toForm}>Continuar</TouchableOpacity>
        </View>
	)
}

export default selectTime

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
    },
    title: {
        marginTop: 30,
        paddingTop: 70,
        fontWeight: "bold",
        backgroundColor: "#FFFF94",
        height: 120,
        fontSize: 20,
    },
    container_btns: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        maxHeight: 100,
    },
    btns: {
        borderColor: "black",
        borderWidth: 2,
        backgroundColor: "yellow",
        padding: "20px",
        borderRadius: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: "10px",
    },
});