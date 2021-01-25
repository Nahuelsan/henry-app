import React,{useState} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { CheckBox, Icon, Image, Input, Text } from 'react-native-elements'
import axios from 'axios'

const NuevoHenry = ({ navigation }) => {
  const [input,setInput]=useState('')
  const sendEmail=(value) =>{
    setInput(value)
    
  }
  const onPress= async ()=>{
    if (!input.includes('@') || !input.includes('.com')){
      return alert('email invalido')
    }
    await axios.post('http://localhost:5000/henry-app-50edd/us-central1/mailer',
    {to:input, 
      message:`<h1>Buenas tardes</h1>`,
      subject:"hola prueba app henry"
    })
    .then(res=>{
      alert(res.data.message)
    })
    setInput('')

  }
  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <Icon
          name="left"
          type='antdesign'
          onPress={() => navigation.navigate('Henry Student')}
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
          <Input
            placeholder='Ingrese el email de destino'
            onChangeText={value => sendEmail(value) }
            value={input}
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