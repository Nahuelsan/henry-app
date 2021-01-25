import styled from 'styled-components/native';

export const Contenedor = styled.View`
  flex: 1;
`;

export const Encabezado = styled.View`
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;  
  z-index: 1; 
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`

export const ContGen = styled.View`
  width: 100%;
  height: 80%;
  background-color: white;
  top: 15%;
  padding: 28px;
  position: absolute;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px; 
  z-index: 2;
`

export const Back = styled.Text`
  margin-left: 15px;
  font-family: 'gadugi';
  font-size: 18px;
`

export const TituloPrin = styled.Text`
  margin-top: 60px;
  font-family: 'gadugib';
  font-size: 27px;
`

export const ContInputs = styled.View`
  height: 100px;
  margin-top: 90px;
  margin-bottom: 50px;
  justify-content: space-between;
`

export const BorderBotInput = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: #707070;
`

export const InpText = styled.TextInput`
  font-family: 'gadugi';
  font-size: 14px;
  margin-bottom: 20px;
`

export const BotonLog = styled.TouchableOpacity`
  width: 70%;
  padding: 15px 30px;
  margin: 0 auto;
  background-color: #FFFF01;
  text-align: center;
  border-radius: 10px;
`

export const ContSocialRed = styled.View`
  margin-top: auto;
`

export const TextButton = styled.Text`
  font-family: 'gadugib';
  font-size: 18px;
`

export const IconSocialRed = styled.View`
  margin-top:20px;
  margin-left: 30px;
  width: 25%;
  flex-direction: row;
  justify-content: space-between;
`

