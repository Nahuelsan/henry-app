import styled from 'styled-components/native';

export const Contenedor = styled.View`
  flex: 1;
  padding-bottom: 30px;
 ` 

export const Encabezado = styled.View`
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;  
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px; 
  z-index: 1; 
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const ConTitle = styled.View` 
  height: 50%;
  justify-content: space-between;
`

export const Welcome = styled.Text` 
  font-family: 'gadugib';
  font-size: 22px;
  margin-bottom: 5px;
`

export const ContAvatar = styled.TouchableOpacity` 
  width: 53px;
  height: 53px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px; 
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
`



export const NavMenu = styled.View`
  position: absolute;
  width: 100%;
  top: 150px;
  padding: 0px 30px;
  flex-direction: row;
  justify-content: space-between;
  z-index: 5;
`

export const Card = styled.View`
  width: 100px;
  height: 125px;
  background-color: #FFFF01;
  padding: 20px 10px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  align-items: center;
`

export const OptionCard = styled.View`
  width: 59px;
  height: 57px; 
  background-color: #FFFFFF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px; 
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px; 
  justify-content: center;
  align-items: center;
`
export const OptionText = styled.Text`
  margin-top: auto;
  font-family: 'gadugib';
  font-size: 13px;
`

export const ContStudents = styled.View `
  margin-top: 100px;
  padding: 0 30px;
`
export const Options = styled.TouchableOpacity`
  flex-direction: row;
  height: 120px;
  margin-bottom: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  background-color: #EBEBEB;
`

export const BackImg = styled.View`
  width: 100px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const ContText = styled.View`
  padding: 10px;
  width: 80%;
`

export const TituloCard = styled.Text`
margin: 10px 0;
font-family: 'gadugib';
font-size: 14px;
`

export const ContMinf = styled.View`
  padding: 0 30px;  
  margin-top: auto;
`

export const IconContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`

export const ImgMinf = styled.View`
  width: 70px;
  height: 70px;
  background-color: #FFFF01;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  justify-content: center;
  align-items: center;
`
