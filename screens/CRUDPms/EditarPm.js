import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, Button, View } from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements';

const EditarPms = ({navigation, route}) => {
    const [state, setState] = useState(
        route.params.pm
    )
    const [isVisible, setIsVisible] = useState(false);
    const list = [
        { title: 'List Item 1' },
        { title: 'List Item 2' },
        {
          title: 'Cancel',
          containerStyle: { backgroundColor: 'red' },
          titleStyle: { color: 'white' },
          onPress: () => setIsVisible(false),
        },
      ];
    console.log(state)
    function Editar(){

    }
    return(
        <ScrollView>
            <View style={styles.header}>
                <Icon name="left" type="antdesign"  />
                <Button title="Go back" onPress={() => navigation.goBack()} />
            </View>
            <View style={styles.marco}>
                <Text style={styles.text}>Editar PM</Text>
            </View>

            {!state.photo ? (
                <Avatar
                    style={styles.avatar}
                    source={{
                        uri:'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'
                    }}
                                
                />
                ) : (
                <Avatar
                    style={styles.avatar}
                    source={{ uri: state.photo }}
                />
            )}
            <ListItem.Content>
                    <ListItem.Title
                        style={styles.pm}
                    >
                        {state.nombre}
                    </ListItem.Title>
                    <Text> Cohorte </Text>

            </ListItem.Content>
        </ScrollView>
    )
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
export default EditarPms;