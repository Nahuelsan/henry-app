import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Image, Icon, ListItem, Input, Button, ButtonGroup } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
//import DateTimePicker from '@react-native-community/datetimepicker'
import DateTimePicker from "react-native-modal-datetime-picker";


const CrearCohorte = ({ navigation }) => {
  //Botones Full Time - Part Time
  const [index, setIndex] = useState(1)
  const buttons = ['Full Time', 'Part Time']
  const updateIndex = (index) => {
    setIndex(index)
  }

  //Modal Calendario
  const [isVisible, setIsVisible] = useState(false)
  const showDateTimePicker = () => {
    setIsVisible(true);
    console.log('entre', isVisible)
  };
  const hideDateTimePicker = () => {
    setIsVisible(false);
  };
  const handleDatePicked = (date) => {
    console.log("A date has been picked: ", date);
    hideDateTimePicker();
  };




  return (
    <View>
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
      <View>

        <ListItem>
          <Text h4>COHORTE N°</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: '01', value: '01' },
              { label: '02', value: '02' },
            ]}
          />
        </ListItem>

        <ListItem>
          <Text h4>MODALIDAD</Text>
          <ButtonGroup
            onPress={updateIndex}
            selectedIndex={index}
            buttons={buttons}
            containerStyle={{ height: 100 }}
          />
        </ListItem>

        <ListItem>
          <Text h4>FECHA DE INICIO</Text>
          <Icon
            name='calendar-sharp'
            type='ionicon'
            onPress={showDateTimePicker} />
          <DateTimePicker
            mode='date'
            display="default"
            style={{ width: 320, backgroundColor: "white" }}
            isVisible={isVisible}
            onConfirm={handleDatePicked}
            onCancel={hideDateTimePicker}
          />
        </ListItem>

        <ListItem>
          <Text h4>FECHA DE FINALIZACION</Text>
          <Icon
            name='calendar-sharp'
            type='ionicon'
            onPress={showDateTimePicker} />
        </ListItem>

        <ListItem>
          <Text h4>INSTRUCTOR</Text>
          <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
              { label: 'Franco Etcheverry', value: 'Franco Etcheverry' },
              { label: 'Toni Tralice', value: 'Toni Tralice' },
            ]}
          />
        </ListItem>

        <ListItem>
          <Text h4>NUMERO DE GRUPOS</Text>
          <Input placeholder='00' />
        </ListItem>

        <ListItem>
          <Icon name='account-group' type='material-community' />
          <ListItem.Content>
            <ListItem.Title>ALUMNOS</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron onPress={() => navigation.navigate('Listado de Alumnos sin Cohorte')} />
        </ListItem>

        <Button title="CREAR COHORTE" />
      </View>
    </View>
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

