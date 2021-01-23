import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar, Text } from 'react-native-elements'

const AdminHeader = ({ navigation }) => {
  return (
    <View style={styles.container} >
      <View style={styles.text}>
        <Text h4>Bienvenido Admin</Text>
      </View>
      <View style={styles.avatar}>
        <Avatar
          rounded
          size="medium"
          source={{
            uri:
              'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg',
          }}
          onPress={() => console.log("Works!")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#e5e500',
  },
  text: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  avatar: {
    display: 'flex',
    alignItems: 'self-end',
    justifyContent: 'center'
  },

});

export default AdminHeader;