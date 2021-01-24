import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const grey = '#f5f5f5';
const yellow = '#feff04';

const UserNavBar = ({ navigation}) => {
  const [press, setPress] = useState(grey);
  const select = (press) => {
    setPress(press)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
          style={{backgroundColor: press, borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
          margin: 5,
          height: 120,
          borderColor: '2px solid black' }}
        onPressIn={() => { select(yellow) }}
        onPressOut={ () => { select(grey) }}
      >
        <View style = {styles.icon}>
        <Icon 
          reverse
          name='shoe-prints'
          type= 'font-awesome-5'
          // onPress = {}
        />
        </View>
        <Text style={styles.text}>Tu progreso</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={{backgroundColor: press, borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
          margin: 5,
          height: 120,
          borderColor: '2px solid black' }}
        onPressIn={() => { select(yellow) }}
        onPressOut={ () => { select(grey) }}
      >
        <View style = {styles.icon}>
        <Icon 
          reverse
          name='calendar-alt'
          type= 'font-awesome-5'
          // onPress = {}
        />
        </View>
        <Text style={styles.text}>Calendario</Text>
      </TouchableOpacity>

      <TouchableOpacity 
          style={{backgroundColor: press, borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
          padding: 10,
          margin: 5,
          height: 120,
          borderColor: '2px solid black' }}
        onPressIn={() => { select(yellow) }}
        onPressOut={ () => { select(grey) }}
      >
        <View style = {styles.icon}>
        <Icon 
          reverse
          name='rocket'
          type= 'font-awesome-5'
          // onPress = {}
        />
        </View>
        <Text style={styles.text}>Job Prep</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: -50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 10,
    margin: 5,
    height: 130,
    borderColor: '2px solid black'
  },
  icon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center' 
  },
  text: {
    fontWeight: 700
  }
})

export default UserNavBar;