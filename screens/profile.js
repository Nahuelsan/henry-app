import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Avatar } from 'react-native-elements'

const Profile = () => {
    const user = {
        img: '',
        name: 'Ignacio Ezequiel Gimenez',
        email: 'ignaciogimenez70@gmail.com',
        edad: 21,
        sexo: 'Masculino',
        nacionalidad: 'Argentino',
        rol: 'Estudiante'
    }

    return(
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
                    <Text style={styles.title}>{user.name}</Text>
                    <Text style={styles.subtitle}>{user.email}</Text>
                </View>
            </View>
            <View style={styles.datos}>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Datos</Text>
                {Object.keys(user).splice(2).map(att => (
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