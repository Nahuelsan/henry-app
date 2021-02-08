import styled from 'styled-components'

export const ContenedorPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  & > h2{
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const DetalleUser = styled.div`
  width: 38%;
  min-height: 400px;
  background-color: white;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  & > h4{
    height: 65px;
    line-height: 65px;
    padding: 0 20px;
    border-bottom: 2px solid #707070;
  }
`
export const InvitarUsuario = styled.div`
  width: 60%;
  min-height: 400px;
  background-color: white;
  box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.75);
  & > h4{
    height: 65px;
    line-height: 65px;
    padding: 0 20px;
    border-bottom: 2px solid #707070;
  }
`
export const ContInCard = styled.div`
  width: 100%;
  height: 84%;
  display: flex;
  justify-content: space-between;
  & > .info{
    margin-top: auto;
    width: 35%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    overflow: hidden;
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: #FFFF01;
    & > h4{
      margin-bottom: 10px;
      font-size: 19px;
    }
  }
  & > .enviar-un-mail{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FFFF01;
  }
  & > .enviar-excel{
    width: 30%;
    display: flex;
    flex-direction: column;
    background-color: #FFFF01;
  }
`