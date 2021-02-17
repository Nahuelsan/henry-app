import React from 'react';
import { Icon } from 'react-native-elements';

import { Contenedor, Encabezado, Home, TextTitle } from './StyledYourCohort';

const CohorteHeader = (props) => {
  return (
    <Contenedor>
      <Encabezado>
        <Home onPress = {() => props.navigation.navigate('Menu Usuario')}>
          <Icon 
            solid = {true}
            name = 'chevron-left'
            type = 'font-awesome-5'
          />
          <TextTitle>Home</TextTitle>
        </Home>
      </Encabezado>
    </Contenedor>
  )
};

export default CohorteHeader;