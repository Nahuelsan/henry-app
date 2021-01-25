import React from "react";
import { Text } from "react-native";
import { Icon } from 'react-native-elements';
import { Encabezado, ConTitle, ContAvatar, Welcome } from './styledStudent';

const AdminHeader = ({ navigation }) => {
  return (
    <Encabezado >
      <ConTitle >
        <Welcome>Bienvenido Admin</Welcome>
        <Text>Admin Henry</Text>
      </ConTitle>
      <ContAvatar
        onPress={() => console.log("Works!")}
      >
        <Icon
          solid={true}
          name='user'
          type='font-awesome-5'
          size= {40}
        />
      </ContAvatar>
    </Encabezado>
  );
}

export default AdminHeader;