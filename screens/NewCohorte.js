import React from "react";
import {
  View
} from "react-native";
import { Card, Input, Button, ListItem, Icon } from "react-native-elements";
import AdminNavBar from '../screens/AdminNavBar'

const NewCohorte = ({ navigation }) => {
  return (
    <View>
      <AdminNavBar navigation={navigation} title='Crear Nuevo Cohorte'/>
      <Card>
        <Card.Title>COHORTE N°00</Card.Title>
        <Card.Divider />

        <ListItem key='1' bottomDivider>
          <Icon name='timetable' type='material-community' />
          <ListItem.Content>
            <ListItem.Title>MODALIDAD</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={() => navigation.navigate('Modalidades')} />
        </ListItem>

        <Input placeholder='Comienzo' />
        <Input placeholder='Finalizacion' />

        <ListItem key='2' bottomDivider>
          <Icon name='graduation-cap' type='font-awesome' />
          <ListItem.Content>
            <ListItem.Title>INSTRUCTOR</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron  onPress={() => navigation.navigate('Listado de Instructores')} />
        </ListItem>

        <Input placeholder='Numero de Grupos' />

        <ListItem key='3' bottomDivider>
          <Icon name='account-group' type='material-community' />
          <ListItem.Content>
            <ListItem.Title>ALUMNOS</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={() => navigation.navigate('Listado de Alumnos sin Cohorte')}/>
        </ListItem>

        <Button title="CREAR COHORTE" />
      </Card>
    </View>
  );
};
export default NewCohorte;