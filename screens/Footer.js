import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';

const Footer = () => {
  return (
    <View style={styles.container}>
      <Icon
        reverse
        name='home'
        type='font-awesome'
      />

      <Icon
        reverse
        name='snapchat-ghost'
        type='font-awesome'
      />

      <View style = {styles.circulo}>
      <Image 
        style = {styles.henry}
        source = {{uri: 'https://media-exp1.licdn.com/dms/image/C4E0BAQGy6GZmHb_SXA/company-logo_200_200/0/1603651276024?e=1619654400&v=beta&t=kRb_lMNqQF3oGVL9IrNYVxKdJf1qDW3FNTRdSeIu4zI'}}
      />
      </View>

      <Icon
        reverse
        name='chat'
        type='material'
      />

      <Icon
        reverse
        name='user-o'
        type='font-awesome'
      />
    </View>
  )
};

const yellow = '#feff04';
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  henry: {
    marginBottom: 20,
    width: 40,
    height: 40,
    marginLeft: 7,
    marginTop: 5
  },
  circulo: {
    backgroundColor: yellow, 
    borderRadius: 10,
    width: 50,
    height: 50,
    marginBottom: 50    
  }
})

export default Footer;