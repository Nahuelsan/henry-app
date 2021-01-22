import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native'
import { Avatar } from 'react-native-elements'
import firebase from '../database/database'

const Profile = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const dbRef = firebase.db.collection("usuarios").doc('8lRY3WQB8HFZzPRFo1Fu')
        const doc = await dbRef.get()
        const user = doc.data()
        setUser(user)
        setLoading(false)
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
                    uri: user.img !== '' ? user.img : 
                    "https://www.mendozapost.com/files/image/7/7142/54b6f4c45797b.jpg"
                }}
                /* title="IG" */
                size="large"
                rounded/>
                <View style={styles.name}>
                    <Text style={styles.title}>{user.nombre}</Text>
                    <Text style={styles.subtitle}>{user.email}</Text>
                </View>
            </View>
            <View style={styles.datos}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Datos</Text>
                {Object.keys(user).filter(att => att !== 'img' && att !== 'nombre' && att !== 'email').sort().map(att => (
                    <View style={styles.container_data} key={att}>
                        <Text style={styles.attribute}>{att.replace(/\b\w/g, a => a.toUpperCase())}</Text>
                        <Text style={styles.value}>{user[att]}</Text>
                    </View>
                ))}
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