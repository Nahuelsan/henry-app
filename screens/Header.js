import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import {
  Avatar,
  Icon
} from 'react-native-elements';

const Header = ({ navigation, title }) => {

  const openMenu = () => {
    navigation.openDrawer()
  }

  return (
    <View style={styles.container}>
      <Icon
        reverse
        name='menu'
        type='entypo'       
        onPress={openMenu}
        style={styles.icon} />
      <View style={styles.header}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    header: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#e5e500'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
});

export default Header;