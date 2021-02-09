import React, { useState ,useEffect} from 'react';
import Header from './Header/Header'
import SideNavBar from './SideNavBar/SideNavBar'
import HenryStudent from '../ContentShow/HenryStudent'
/* Estilos */
import {
  Contenedor,
  ContenedirInfoSelect
} from './Header&sidebar';

const HeaderSidebar = () => {
  const [ select, setUsers ] = useState('Henry-student');
  useEffect(() => {
    if(!JSON.parse(localStorage.getItem('user'))){
      window.location.href = 'http://localhost:3000';
    }
  })
  return ( 
    <Contenedor>
      <Header />
      <SideNavBar />
      { select === 'Henry-student' ?
        <ContenedirInfoSelect>
          <HenryStudent />
        </ContenedirInfoSelect> : null}
    </Contenedor>
   );
}
 
export default HeaderSidebar;