import React from "react";
import {
  Text,
  View
} from "react-native";
import { Avatar, ListItem, Button, Icon } from "react-native-elements";
import AdminNavBar from '../screens/AdminNavBar'

const list = [
  {
    title: 'COHORTE #01',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Toni Tralice'
  },
  {
    title: 'COHORTE #02',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Franco Etcheverry'
  }, {
    title: 'COHORTE #03',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Agustin Amani'
  }, {
    title: 'COHORTE #04',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Leo Maglia'
  }, {
    title: 'COHORTE #05',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Lucas Verdielli'
  }, {
    title: 'COHORTE #06',
    avatar_url: 'https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg',
    instructor: 'Ignacio Contreras'
  },
]


const CohorteList = ({ navigation }) => {
  return (
    <View>
      <AdminNavBar navigation={navigation} title='Lista de Cohortes' />
      {
        list.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <Avatar source={{ uri: l.avatar_url }} />
            <ListItem.Content>
              <ListItem.Title>{l.title}</ListItem.Title>
              <ListItem.Subtitle>{l.instructor}</ListItem.Subtitle>
            </ListItem.Content>
            <Button 
            title="VER" 
            buttonStyle={{ backgroundColor: 'black' }}
            onPress={() => navigation.navigate('Cohorte Seleccionado')} />
            <Button
              buttonStyle={{ backgroundColor: 'black' }}
              icon={
                <Icon
                  name="edit"
                  type='feather'
                  size={15}
                  color="white"
                />
              }
              color={'black'}
            />
          </ListItem>
        ))
      }
    </View>
  );
};
export default CohorteList;