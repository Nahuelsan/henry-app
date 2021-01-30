import { ScrollView, Text, StyleSheet, Picker, Button, View, TouchableHighlight } from 'react-native';
import React, { useState, useEffect} from 'react';
import { Avatar, ListView, Icon } from 'react-native-elements';
import ListPopover from 'react-native-list-popover';
import firebase from '../../database/database';

const EditarPms = ({navigation, route}) => {
    const [state, setState] = useState(
        {
            isVisible: false,
            nombre: 'nahuel sanchez',
            cohorte: 'FT 05',
            photo: '',
            grupo: '5'
        }
    )
    const [cohortes, setCohortes] = useState([])
    useEffect(() =>{
        firebase.db.collection('cohorte').onSnapshot((snap) => {
            const cohorte = [];
            snap.docs.forEach((doc) => {
                const {
                    comienzo, 
                    description, 
                    fin, 
                    modalidad, 
                    nombre
                } = doc.data()
                cohorte.push({
                    comienzo, 
                    description, 
                    fin,
                    modalidad,
                    nombre
                })
            });
            setCohortes(cohorte)
        })
    }, []);
    function Editar(item, index){

    }
    return(
        <ScrollView >
            
            {/* Cabecera */console.log(cohortes[1])}
            <View style={styles.header}>
                <Icon name="left" type="antdesign"  />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            {/* Titulo */}
            <View style={styles.marco}>
                <Text style={styles.text}>Editar PM</Text>
            </View>
            {/* Contenedor */}
            <View style={styles.container}>
                <Avatar
                    style={styles.avatar}
                    source={{
                        uri:'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                    }}
                                
                />
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.setState({...state, isVisible: true})}
                    >
                    <Text>{state.cohorte || 'Select'}</Text>
                    </TouchableHighlight>
                    <ListPopover
                        list={cohortes}
                        isVisible={state.isVisible}
                        onClick={(item) => this.setState({...state, grupo: item})}
                        onClose={() => this.setState({...state, isVisible: false})}
                    />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginLeft: '50px'

    },
    formulario:{
        textAlign: 'center'
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
    },
    button: {
        backgroundColor: '#b8c',
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
});
export default EditarPms;