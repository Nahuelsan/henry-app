import React,{ useState, useEffect } from 'react';
import { CheckBox, Icon, Image, Input, Text, ListItem } from 'react-native-elements'
import {
  Contenedor,
  Encabezado,
  ConTitle,
  TextTitle,
  Options,
  BackImg,
  ContText,
  TituloCard,
  ContMinf,
  IconContent,
  ImgMinf,
  BodyCont,
  TitleBody,
  ContList,
  TextContList,
  BotonLog,
  TextButton,
  ImgSise,
  LogoSise
} from './styledNueHenry';
let card1 = require('../../src/assets/img/imgCard1.png');
let logFont = require('../../src/assets/img/henry_logo.jpg'); 

import axios from 'axios'
import firebase from "../../database/database";

const NuevoHenry = ({ navigation }) => {
 
  const [count,setCount]=useState([0])
  const [students,setStudents]=useState([])
 
  const sendEmailStudents=(value,i) =>{
    var aux =students 
    aux[i]=value
    setStudents(aux)
    console.log(students)
  }

  const axiosEmail =(mail)=>{
       axios.post('http://localhost:5000/henry-app-50edd/us-central1/mailer',
      {to:mail, 
        message:`Buenas tardes`,
        subject:"hola prueba app henry"
      })
      .then(res=>{
        firebase.db.collection('invited users').add({
          email:mail
        })
      })
      
    }

  
  const onPress=  ()=>{
    students.map(async (e,i)=>{
      if (!e.includes('@') || !e.includes('.') || e===''){
        return alert(`Email ${i+1} invalido`)
      }
        await axiosEmail(e)
    })
    setStudents([]);
    setCount([]);
    navigation.navigate('Mensaje NuevoEstudiante');
  }
  
  const addEmail = ()=>{
    setCount(count.concat(count.length))
   
    console.log("counter",count)

  }

  const importHenrys = () => {
    navigation.navigate('Importar Henrys' , {list: students})
  }

  return (
    <Contenedor>
      <Encabezado >
			  <ConTitle
          onPress={() => navigation.navigate('Henry Admin')}
        >
          <Icon
						solid={true}
            name="chevron-left"
						type="font-awesome-5"
          />
          <TextTitle>Home</TextTitle>
        </ConTitle>
      </Encabezado>
      <Options onPress={() => props.navigation.navigate('Nuevo Henry')}>
        <BackImg>
          <ImgSise source={card1} />
        </BackImg>
        <ContText>
          <TituloCard>Invitar un nuevo Henry</TituloCard>
          <Text>Invita a un nuevo henry a una cohorte </Text>
        </ContText>
      </Options>
      <BodyCont>
        <TitleBody>Inscribe a un futuro Henry</TitleBody>
        { count.map((e,i)=>(
            <ListItem key={i} >
              <ContList bottomDivider={true}>
                <TextContList>Estudiante {i+1}</TextContList>
                <Input
                  placeholder='Ingrese el email de destino'
                  onChangeText={value => sendEmailStudents(value,i)}
                />
              </ContList>
            </ListItem>
          ))}
        <BotonLog 
          onPress={addEmail}>
					<TextButton>Agregar email estudiante</TextButton>
				</BotonLog>
        <BotonLog onPress={importHenrys}>
          <TextButton>Importar Henrys</TextButton>
        </BotonLog>
        <BotonLog 
          onPress={onPress}>
					<TextButton>Enviar email</TextButton>
				</BotonLog>
      </BodyCont>
			
			<ContMinf>
				<IconContent>
					<Icon
						name="home"
						type="font-awesome"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<Icon
						name="ghost"
						type="font-awesome-5"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<ImgMinf>
						<LogoSise source={logFont} />
					</ImgMinf>
					<Icon
						solid={true}
						name="comment-dots"
						type="font-awesome-5"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
					<Icon
						solid={true}
						name="user"
						type="font-awesome-5"
						size={40}
						onPress={() => props.navigation.navigate('Henry Admin')}
					/>
				</IconContent>
			</ContMinf>
    </Contenedor>
  )
};

export default NuevoHenry;