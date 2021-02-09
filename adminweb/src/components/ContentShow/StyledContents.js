import styled from 'styled-components'

export const ContenedorPanel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 20px;
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
    & > .btn-email{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
    }
  }
  & > .enviar-excel{
    width: 30%;
    height: 70%;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 10px;
    & > .img-user{
      width: 100%;
      height: 60%;
      & > img{
        width: 100%;
        max-height: 100%;
      }
    }
    & > button{
      width: 85%;
      border: none;
      background-color: #FFFF01;
      padding: 7px;
      border-radius: 10px;
    }
  }
`
export const InputCont = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #f0f0f0;
  margin: 10px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100%;
  padding: 0 .4rem;
  & > i{
    text-align: center;
    line-height: 55px;
    color: #AFAFAF;
    font-size: 25px;
  }
  & > input{
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 20px;
    color: #333;
  }
  & > input::placeholder{
    color: #AFAFAF;
    font-weight: 500;
    font-size: 14px;
  }
`
export const CheckBox = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  margin: 0 0 10px 0;
  padding: 0 .4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > label{
    font-size: 14px;
    width: 85%;
  }
`
export const ListaEstudiantes = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > h2{
    width: 100%;
    margin-bottom: 1rem;
  }
`
export const Table = styled.table`
  border-collapse: collapse;
`
export const Thead = styled.thead`
  background-color: rgba(255, 255, 1, 0.42);
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  & > tr > th{
    padding: 10px;
    background-color: rgba(255, 255, 1, 0.42);
  }
`
export const Tbody = styled.tbody`
  background-color: white;
  & > tr > td{
    padding: 10px;
  }
`