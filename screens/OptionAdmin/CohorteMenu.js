import React from "react";
import {
  Text,
} from "react-native";
import { Icon, Image } from "react-native-elements";
import AdminHeader from "./AdminHeader";
import AdminNavBar from "./AdminNavBar";
import { 
  Contenedor, 
  ContStudents, 
  Options, 
  BackImg, 
  TituloCard, 
  ContText, 
  ContMinf, 
  IconContent,
  ImgMinf
} from './styledStudent';
let card1 = require("../../src/assets/img/imgCard2.png");
let card2 = require("../../src/assets/img/imgCard3.png");
let logFont = require("../../src/assets/img/henry_logo.jpg");

const CohorteMenu = ({navigation}) => {
  return (
    <Contenedor>
      <AdminHeader navigation={navigation}/>
      <AdminNavBar navigation={navigation} />

      <ContStudents>
        <Options
          onPress={() => navigation.navigate('Lista de Cohortes')}
        >
          <BackImg>
            <Image
              style={{ width: '80px', height: '80px' }}
              source={card1} />
          </BackImg>
          <ContText >
            <TituloCard>Ver Cohortes</TituloCard>
            <Text>Lista de las cohortes activas y no activas de Henry</Text>
          </ContText>
        </Options>

        <Options
          onPress={() => navigation.navigate('Crear Cohorte')}
        >
          <BackImg>
            <Image
              style={{ width: '90px', height: '90px' }}
              source={card2} />
          </BackImg>
          <ContText >
            <TituloCard>Crear Cohorte</TituloCard>
            <Text>Crea una nueva Cohorte, para un nuevo programa de Henry</Text>
          </ContText>
        </Options>
      </ContStudents>
      
      {/* Menu inferior General */}
      <ContMinf>
        <IconContent>
          <Icon
            name='home'
            type='font-awesome'
            size= {40}
            onPress={() => navigation.navigate('Henry Student')}
          />
          <Icon
            name='ghost'
            type='font-awesome-5'
            size= {40}
            onPress={() => navigation.navigate('Henry Student')}
          />
          <ImgMinf >
            <Image
              style={{ width: '40px', height: '40px' }}
              source={logFont} />
          </ImgMinf>
          <Icon
            solid={true}
            name='comment-dots'
            type='font-awesome-5'
            size= {40}
            onPress={() => navigation.navigate('Henry Student')}
          />
          <Icon
            solid={true}
            name='user'
            type='font-awesome-5'
            size= {40}
            onPress={() => navigation.navigate('Henry Student')}
          />
        </IconContent>
      </ContMinf>
    </Contenedor>
  );
};

export default CohorteMenu;