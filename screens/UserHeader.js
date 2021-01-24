import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-elements';
import { block } from 'react-native-reanimated';


const UserHeader = ({ name = 'Sherlock', photo = '' }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Bienvenido {name}</Text>
      </View>
      <View style = {styles.avatar}>
        {
          !photo ?
            <Avatar
              rounded
              size='medium'
              source={{ uri: 'https://www.netclipart.com/pp/m/411-4114765_avatar-icon.png' }}
              onPress={() => console.log('Funciona')}
            /> :
            <Avatar 
              rounded
              size='medium'
              source={{uri: photo}}
              onPress={() => console.log('Avatar')}
            />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff93',
    height: 150,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  },
  text: {
    marginTop: 40,
    paddingLeft: 24,
    fontSize: 20,
    fontWeight: 700
  },
  avatar: {
    alignItems: 'flex-end',
    paddingRight: 25,
    marginTop: -30
  }
})

export default UserHeader;