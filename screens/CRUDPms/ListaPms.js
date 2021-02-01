import React, { useState, useEffect } from 'react'; 
import { View, Text, StyleSheet, Button, Alert  } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';
import firebase from '../../database/database';


const ListaPms = (props) =>{
    const [
        pms,
        setPms
    ] = useState([]);
    useEffect(() => {
        firebase.db.collection('PMs').onSnapshot((snap) => {
            const pm = [];
            snap.docs.forEach((doc) => {
                const {nombre, cohorte, email, photo} = doc.data()
                pm.push({
                    photo,
                    nombre,
                    cohorte,
                    email,
                    id: doc.id,
                })
            });
            setPms(pm)
        });
    }, []);
    const eliminar = async (id) =>{
        console.log("anda ? "+ id)
        const dbRef = firebase.db.collection('PMs').doc(id);
        if (confirm('Esta seguro de querer eliminar este PMs?')) {
			await dbRef.delete();
			alert('Usuario Eiminado');
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
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name="left" type="antdesign"  />
                <Text h4>Home</Text>
            </View>

            <View style={styles.marco}>
                <Text style={styles.text}>Lista de PMs</Text>
            </View>
            <View>
            {pms.map((pm, i) => (
                    <ListItem key={i} bottomDivider>
                        {!pm.photo ? (
                            <Avatar
                                style={styles.avatar}
                                source={{
                                    uri:
                                        'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                                }}
                                
                            />
                        ) : (
                                <Avatar
                                    style={styles.avatar}
                                    source={{ uri: pm.photo }}
                                />
                            )}
                        <ListItem.Content>
                            <ListItem.Title
                                style={styles.pm}
                            >
                                {pm.nombre}
                            </ListItem.Title>
                            <ListItem.Subtitle>{pm.email}</ListItem.Subtitle>
                            
                            </ListItem.Content>
                            <View>
                                <Button 
                                    title="Editar"
                                    onPress={() => props.navigation.navigate('EditarPM', {pm: pm})}
                                /> 
                                <Button 
                                    title="Eliminar"
                                    onPress={() => eliminar(pm.id)}
                                />     
                            </View>                   
                    </ListItem>
                ))}
            </View>
        </View>
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