import React from "react";
import {
  View
} from "react-native";
import { Card, Input,Button } from "react-native-elements";


const NewCohorte = ({ navigation }) => {
  return (
    <View>
      <Card>
        <Card.Title>COHORTE N°00</Card.Title>
        <Card.Divider />
        <Input placeholder='Modalidad'/>
        <Input placeholder='Comienzo'/>
        <Input placeholder='Finalizacion'/>
        <Input placeholder='Instructor'/>
        <Input placeholder='Numero de Grupos'/>
        <Button title="Seleccionar Alumnos"/>
        <Button title="CREAR COHORTE"/>
      </Card>
    </View>
  );
};
export default NewCohorte;