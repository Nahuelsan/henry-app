import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function LogedIn() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true)
  }



  return (
    <div className='Dropdown'>
      <div>
        {/* {user ?
          <div>
            <img src={user.avatar} />
            <h5>{user.nombre}</h5>
            <h5>{user.rol}</h5>
            <button onClick={handleClick}>Admin</button>
          </div>
          : */}
          <div>
            <img src='https://image.freepik.com/vector-gratis/perfil-avatar-hombre-icono-redondo_24640-14044.jpg' alt='avatar'  with='50px' height='50px' />
            <h5>Nicolas Valencia</h5>
            <h5>Admin</h5>
          </div>
       {/*  } */}
      </div>

      {isOpen && <div className='Dropdown-menu'>
        {/* <div>
          <img src={user.avatar} />
          <h5>{user.nombre}</h5>
          <h5>{user.rol}</h5>
        </div> */}

        <div>
          <h3>DNI/Cedula</h3>
          <h4>10648976659</h4>
        </div>

        <div>
          <h3>Github</h3>
          <h4>Nnnnnnnnn/Nnnn</h4>
        </div>

        <div>
          <h3>Nacionalidad</h3>
          <h4>Colombiana</h4>
        </div>

        <div>
          <h3>Telefono</h3>
          <h4>10648976659</h4>
        </div>

        <div>
          <button><Link>Modificar datos</Link></button>
        </div>
        <div>
          <button onClick={setIsOpen(false)}>Ocultar</button>
        </div>
      </div>}
    </div>
  );
}

export default LogedIn;



