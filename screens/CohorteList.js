import React,{useEffect,useState} from "react";
import {
  View,
} from "react-native";
import {  ListItem ,Button} from "react-native-elements";
import firebase from "../database/database";


const CohorteList = () => {
const [cohorte,setCohorte]=useState([])
  useEffect(() =>{
    firebase.db.collection('cohorte').onSnapshot(query=>{
      var data=[]
      query.docs.forEach(docs=>{
        const {comienzo,descripcion, fin , modalidad}=docs.data()
        data.push({
          id:docs.id,
          comienzo,
          descripcion,
          fin,
          modalidad
        })
      })
      setCohorte(data)
    })
  },[])
  console.log(cohorte)
  // const list = [
  //   {
  //     name: 'Amy Farha',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
  //     subtitle: 'Vice President'
  //   },
  //   {
  //     name: 'Chris Jackson',
  //     avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
  //     subtitle: 'Vice Chairman'
  //   },
  //   // more items
  // ]
  const onPressSee = () =>{
    
  }
  const onPressEdit = () =>{

  }
  return (
    <View>
      {/* <Text h2> Listado de cohortes</Text> */}
      {
        cohorte.map((l, i) => (
          <ListItem key={i} bottomDivider>
            <ListItem.Chevron/>

            <ListItem.Content style={{flex:1,flexDirection: 'row'}}>
              <ListItem.Content >

              <ListItem.Title>{`Cohorte ${l.id}`}</ListItem.Title>
              <ListItem.Subtitle>{`Comienzo ${l.comienzo}`}</ListItem.Subtitle>
              <ListItem.Subtitle>{`Fin ${l.fin}`}</ListItem.Subtitle>
              </ListItem.Content>
              <ListItem.Content style={{ flex: 1, flexDirection: 'row' }}>

              <Button
                onPress={onPressSee}
                title="See"
               
              />
              <Button
                onPress={onPressEdit}
                title="Edit"
              />
            </ListItem.Content>
            </ListItem.Content>
            
          </ListItem>
        ))
      }
    </View>
  );
};
export default CohorteList;