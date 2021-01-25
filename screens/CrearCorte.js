import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image, Icon, Card, ListItem, Input, Button } from 'react-native-elements';

const CrearCohorte = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header} >
        <Icon
          name="left"
          type='antdesign'
          onPress={() => navigation.navigate('Henry Student')}
        />
        <Text h4>Home</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{ width: '150px', height: '150px' }}
            source={{ uri: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg' }} />
        </View>
        <View style={styles.text}>
          <Text>CREAR COHORTE</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipiscing, elit curabitur mollis dictum ornare, ac morbi dictumst metus ut. Integer risus tellus pulvinar diam convallis platea sed massa, </Text>
        </View>
      </View>
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
          <ListItem.Chevron onPress={() => navigation.navigate('Listado de Instructores')} />
        </ListItem>

        <Input placeholder='Numero de Grupos' />

        <ListItem key='3' bottomDivider>
          <Icon name='account-group' type='material-community' />
          <ListItem.Content>
            <ListItem.Title>ALUMNOS</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={() => navigation.navigate('Listado de Alumnos sin Cohorte')} />
        </ListItem>

        <Button title="CREAR COHORTE" />
      </Card>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e500',
  },
  container: {
    //border: 'solid 2px grey',
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

export default CrearCohorte;

