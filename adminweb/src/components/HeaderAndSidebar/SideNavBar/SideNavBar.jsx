import React from 'react';
import { Link } from 'react-router-dom';
/* Estilos */
import {
  ContenedorSideBar,
} from '../Header&sidebar';


function SideNavBar() {
  return (
    <ContenedorSideBar>
      <div>
        <Link><i class="fas fa-sign-out-alt"></i></Link>
        <Link><i class="far fa-address-book"></i></Link>
        <Link><i class="fas fa-book"></i></Link>
        <Link><i class="fas fa-graduation-cap"></i></Link>
      </div>
    </ContenedorSideBar>
  );
}

export default SideNavBar;