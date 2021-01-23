import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Image } from 'react-native-elements'
import AdminHeader from "./AdminHeader";
import AdminNavBar from "./AdminNavBar";

const HenryStudent = ({ navigation }) => {
  return (
    <View>
      <AdminHeader navigation={navigation}/>
      <AdminNavBar navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{ width: '150px', height: '150px' }}
            source={{ uri: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg' }} />
        </View>
        <View style={styles.text}>
          <Text>INVITAR NUEVO HENRY</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipiscing, elit curabitur mollis dictum ornare, ac morbi dictumst metus ut. Integer risus tellus pulvinar diam convallis platea sed massa, </Text>
          <Icon
            name="right"
            type='antdesign'
            onPress={() => navigation.navigate('Nuevo Henry')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    border: 'solid 2px grey',
    padding: '7px',
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    padding: '10px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  }
});

export default HenryStudent;
