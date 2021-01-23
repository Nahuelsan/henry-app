import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  Card,
  Icon
} from 'react-native-elements';

const AdminNavBar = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Icon
          reverse
          name='add-user'
          type='entypo'
          onPress={() => navigation.navigate('Henry Student')}
          style={styles.icon} />
        <Text>Henry Student</Text>
      </Card>
      <Card style={styles.card} >
        <Icon
          reverse
          name='codepen'
          type='font-awesome'
          onPress={() => navigation.navigate('Menu Cohortes')      }
          style={styles.icon} />
        <Text>Cohortes</Text>
      </Card>
      <Card style={styles.card}>
        <Icon
          reverse
          name='brain'
          type='font-awesome-5'
          onPress={() => navigation.navigate('Listado de Instructores')}
          style={styles.icon} />
        <Text>Instructores</Text>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e500'
  },
  card: {
    display: 'flex',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AdminNavBar;