import React from "react";
import { View } from "react-native";
import { ListItem, Avatar } from 'react-native-elements'
import AdminHeader from "./OptionAdmin/AdminHeader";
import AdminNavBar from "./OptionAdmin/AdminNavBar";

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg',
    subtitle: 'Vice Chairman'
  },
]

const InstructoresList = ({navigation}) => {
  return (
    <View>
      <AdminHeader navigation={navigation}/>
      <AdminNavBar navigation={navigation}/>
  {
    list.map((l, i) => (
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
  );
};
export default InstructoresList;
