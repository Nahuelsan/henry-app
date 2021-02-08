import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/* Estilos */
import {
  ContenedorUser
} from '../Header&sidebar';
/* Import imagen */
import ImgUser from "../../../assets/Img/imgUser.png";


function LogedIn() {
  const [user, setUser] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <ContenedorUser onClick={handleClick}>
      {user ?
        <>
          <div className={'text'}>
            <h5>{user.nombre}</h5>
            <p>{user.rol}</p>
          </div>
          <div className={'img-user'}>
            <img src={user.avatar} alt='avatar'  with='60px' height='60px' />
          </div>
        </>
        :
        <>
          <div className={'text'}>
            <h5>Nicolas Valencia</h5>
            <p>Admin</p>
          </div>
          <div className={'img-user'}>
            <img src={ImgUser} alt='avatar'  with='60px' height='60px' />
          </div>
        </>
      }
    </ContenedorUser>
  );
}

export default LogedIn;



