import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

const students = [
  {
    photo: 'https://cdn5.vectorstock.com/i/1000x1000/51/99/icon-user-avatar-for-web-site-or-mobile-app-vector-3125199.jpg',
    documento: 11111111,
    apellido: 'Stark',
    nombre: 'John',
    email: 'sjohn@gmail.com',
    id_cohorte: 7
  },
  {
    photo: '',
    documento: 11111222,
    apellido: 'Holmes',
    nombre: 'Sherlock',
    email: 'holmessherlock@gmail.com',
    id_cohorte: 6
  }
]


const StudentList = () => {
  return (
    <View style = {styles.container}>
      <View style = {styles.marco}>
      <Text style = {styles.text}>Lista de Estudiantes</Text>
      </View>
      <View>
      {
        students.map((student, i) => (
          <ListItem key={i} bottomDivider>
          {
            !student.photo ? <Avatar style={styles.avatar} source={{uri: 'https://2mingenieria.com.ve/wp-content/uploads/2018/10/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg'}}/>
            : <Avatar style={styles.avatar} source={{uri: student.photo}} />
          }
          <ListItem.Content>
              <ListItem.Title style={styles.estudiante}>{student.apellido},{student.nombre}</ListItem.Title>
              {/* <ListItem.Title>{student.nombre}</ListItem.Title> */}
              <ListItem.Subtitle>{student.documento}</ListItem.Subtitle>
              <ListItem.Subtitle>{student. email}</ListItem.Subtitle>
              <ListItem.Subtitle style={styles.cohorte}>Cohorte # {student.id_cohorte}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        ))
      }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  marco: {
    backgroundColor: '#ffe127',
    textAlign: 'center',
  },
  text: {
    fontSize: 30
  }, 
  avatar: {
    width: 100,
    height: 100
  },
  estudiante: {
    fontWeight: 700,
    fontSize: 20
  }
})

export default StudentList