import React from 'react';
import { Link } from 'react-router-dom';
/* Estilos */
import {
  ContenedorSideBar,
} from '../Header&sidebar';


function SideNavBar() {
  const signOut =()=> {
    localStorage.setItem('user', null)
    window.location.href = 'http://localhost:3000';
  }
  return (
    <ContenedorSideBar>
      <div>
        <Link><i class="fas fa-sign-out-alt" onClick={signOut}></i></Link>
        <Link><i class="far fa-address-book"></i></Link>
        <Link><i class="fas fa-book"></i></Link>
        <Link><i class="fas fa-graduation-cap"></i></Link>
      </div>
    </ContenedorSideBar>
  );
}

export default SideNavBar;