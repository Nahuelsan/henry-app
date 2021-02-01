import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import firebase from '../../database/database'

const selectTime = (props) => {
    const {email} = props.route.params
    const [cohortes, setCohortes] = useState()

    useEffect(() => {
        firebase.db.collection('cohorte').onSnapshot(snap => {
            let cohorteFull = {}
            let cohortePart = {}
            snap.docs.forEach(doc => {
                const {nombre, comienzo, modalidad} = doc.data()
                const cohorte = {
                    nombre, comienzo, modalidad
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
    
    console.log(cohortes)

	return(
		<View style={s.container}>
            <Text>Que modalidad quieres cursar?</Text>
            <View>
                <TouchableOpacity>Full Time</TouchableOpacity>
                <TouchableOpacity>Part Time</TouchableOpacity>
            </View>
            <TouchableOpacity>Continuar</TouchableOpacity>
        </View>
	)
}

export default selectTime

const s = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        color: "black",
    },
});