import styled from 'styled-components/native';

export const Contenedor = styled.View `
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background-color:white;
`

export const Encabezado = styled.View `
  width: 100%;
  height: 25%;
  padding: 50px 30px;
  background-color: #FFFF94;  
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Home = styled.TouchableOpacity `
  flex-direction: row;
  justify-content: space-between
`

export const TextTitle = styled.Text `
  font-family: 'gadugi';
  font-size: 18px;
  margin-left: 10px
`

export const Options = styled.View `
  width: 85%;
  height: 120px;
  position: absolute;
  top: 15%;
  flex-direction: row;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px; 
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px; 
  background-color: #F5F5F5;
  z-index: 5;
`

export const BackImg = styled.View `
  width: 100px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const ImgSize = styled.Image `
  width: 90px;
  height: 90px
`

export const ContText = styled.View `
  padding: 10px;
  width: 70%;
`

export const TituloCard = styled.Text `
  margin: 10px 0;
  font-family: 'gadugib';
  font-size: 14px;
`

export const ContGeneral = styled.View `
  position: absolute;
  top: 20%;
  width: 100%;
  height: 80%;
  z-index: 2;
  background-color: #fff;
  align-items: center;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`

export const Cohorte = styled.Text `
  margin-top: 23%;
  font-family: 'gadugib';
  font-size: 20px;
  font-weight: 900
`

export const GroupCard = styled.View `
  width: 85%;
  height: 120px;
  position: absolute;
  top: 18%;
  flex-direction: row;
  z-index: 5;
`

export const Titulo = styled.Text `
  width: 90%;
  height: 50px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  justify-content:center;
  padding-top: 5px;
`

export const Img = styled.View `
  background-color: #F5F5F5;
  width: 90%;
  height: 95px;
  border-bottom-left-radius: 20px;
  border-bottom-right_radius: 20px;
  justify-content: center;
  align-items: center;
`

export const Imagen = styled.Image `
  width: 70px;
  height: 70px;
`

export const User = styled.Image `
  width: 50px;
  height: 50px;
`

export const Pm = styled.View `
  width: 90%;
  height: 90px;
  position: absolute;
  top: 20%;
  flex-direction: column;
  z-index: 5;
  align-items: center;
  margin-left: 15px;
  margin-right: -15px;
`

export const TituloPm = styled.Text `
  width: 90%;
  height: 30px;
  background-color: #FFFF01;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  text-align: center;
  justify-content: center;
`