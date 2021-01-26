import React,{useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { CheckBox, Icon, Image, Input, Text, ListItem } from 'react-native-elements'
import axios from 'axios'
import firebase from "../database/database";

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
      if (!e.includes('@') || !e.includes('.com') || e===''){
        return alert(`Email ${i+1} invalido`)
      }
      // if(!e){
        
      // }else{
        await axiosEmail(e)
      // }
    })
    alert('Email sent')
    setStudents([])
    setCount([])
  }
  
  const addEmail = ()=>{
    setCount(count.concat(count.length))
   
    console.log("counter",count)

  }
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Icon
          name="left"
          type='antdesign'
          onPress={() => navigation.navigate('Henry Admin')}
        />
        <Text h4>Home</Text>
      </View>
      <View style={styles.card}>
        <Image
          style={{ width: '150px', height: '150px' }}
          source={{ uri: 'https://simpsonizados.club/wp-content/uploads/2019/08/l18xQsO27KFJwsj35JaAsG95dN7-185x278.jpg' }} />
        <View style={styles.text}>
          <Text>INVITAR NUEVO HENRY</Text>
          <Text>Lorem ipsum dolor sit amet consectetur adipiscing, elit curabitur mollis dictum ornare, ac morbi dictumst metus ut. Integer risus tellus pulvinar diam convallis platea sed massa, </Text>
        </View>
      </View>
        <View>
          <Text h4>Inscribe a un futuro Henry</Text>
          {
            count.map((e,i)=>(
              <ListItem key={i} bottomDivider>
                Estudiante {i+1}
              <view>
                <Input
                  placeholder='Ingrese el email de destino'
                  onChangeText={value => sendEmailStudents(value,i)}
                />
                  
              </view>
              </ListItem>

            ))
          }
          <Button
            title="Agregar  email estudiante "
          onPress={addEmail}
          />
          <Button
            title="Enviar email"
           onPress={onPress}
          />
        </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection: 'column',
  },
  header: {    
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e5e500',
  },
  card: {
    margin:'20px',
    //border: 'solid 2px grey',
    display: 'flex',
    flexDirection: 'row',
  },
  text: {   
    padding: '10px',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
  }
});

export default NuevoHenry;