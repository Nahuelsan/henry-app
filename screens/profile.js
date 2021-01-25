import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, TextInput, Button, Alert } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import firebase from '../database/database'

const Profile = () => {
    const [user, setUser] = useState({})
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(true)
    const dbRef = firebase.db.collection("users").doc('NxIN47R31XzyXF1LvFyg')
    useEffect(() => {
        getUser()
    }, [])

    const profile = [
        {
            att: 'Dni / Cedula',
            val: 'dni'
        },
        {
            att: 'Github',
            val: 'github'
        },
        {
            att: 'Nacionalidad',
            val: 'nacionalidad'
        },
        {
            att: 'Telefono',
            val: 'phone'
        }
    ]

    const getUser = async () => {
        const doc = await dbRef.get()
        const user = doc.data()
        setUser(user)
        setLoading(false)
    }

    const updateUser = async () => {
        profile.map(field => !!user[field.val]).includes(false) ? Alert.alert(
            "Todos los campos deben estar completos",
            '',
            [{text: 'Aceptar'}]
        ) : (await  dbRef.set(user))
    }

    return loading ? (
        <View>
            <ActivityIndicator
            size="large"
            color="gray"
            />
        </View>
    ) : (
        <ScrollView style={styles.container_main}>
            <View style={styles.container_img_name}>
                <Avatar
                source={{
                    uri: user.img ? user.img : 
                    "https://www.mendozapost.com/files/image/7/7142/54b6f4c45797b.jpg"
                }}
                size="large"
                rounded/>
                <View style={styles.name}>
                    <Text style={styles.title}>{`${user.first_name} ${user.last_name}`}</Text>
                    <Text style={styles.subtitle}>{user.email}</Text>
                </View>
            </View>
            <View style={styles.datos}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Datos</Text>
                {profile.map(field => (
                    <View style={styles.container}>
                        <View style={styles.container_data}>
                            <Text style={styles.attribute}>{field.att}</Text>
                            {edit ? <TextInput
                            placeholder={field.att}
                            value={user[field.val]}
                            onChangeText={val => setUser({...user, [field.val]: val})}
                            /> : <Text style={styles.value}>{user[field.val]}</Text>}
                        </View>
                    </View>
                ))}
                <Button title={edit ? 'Guardar cambios' : 'Editar'} onPress={() => {setEdit(!edit), edit && updateUser()}}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container_main: {
        backgroundColor: 'yellow',
    },
    container_img_name: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 120,
        position: 'relative',
        backgroundColor: 'white',
        paddingLeft: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    name: {
        marginLeft: 15,
        flex: 1,

    },
    title: {
        fontSize: 25,
    },
    subtitle: {
        color: 'gray'
    },
    text: {
        margin: 7,
    },
    datos: {
        backgroundColor: 'white',
        marginTop: 18,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    /* container: {
        flex: 1,
        justifyContent: 'space-between'
    }, */
    container_data: {
        marginTop: 10,
        paddingBottom: 10,
        borderBottomColor: '#e5e500',
        borderBottomWidth: 1,
    },
    value: {
        fontWeight: 'bold',
        color: 'black'
    },
    attribute: {
        color: 'gray',
        marginTop: 7
    },
})

export default Profile