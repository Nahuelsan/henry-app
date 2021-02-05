import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function SignIn() {

  const [state, setState] = useState({
    correo: '',
    contraseña: ''
  })

  const handleInputChange = function (e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    console.log(state)
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log('works!')
  }

  return (
    <div>
      <div>
        <div>
          <h2>Nuevo aqui?</h2>
          <p>Se re ha enviado un correo, para ser parte de la familia Henry Admin, registrate con el coreo al que te llego el mensaje para continuar</p>
          <button><Link to='/register'>Registrarse</Link></button>
        </div>
        <img src='https://okdiario.com/img/2019/09/05/mejores-frases-de-homer-simpson-655x368.jpg' alt='SignInImage' />
      </div>
      <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo" name="correo" value={state.correo} onChange={handleInputChange} /><br />
          <input type="password" placeholder="Contraseña" name="contraseña" value={state.contraseña} onChange={handleInputChange} />
          <div><input type="submit" value="Iniciar Sesión" /></div>
        </form>
        <h3>O inicia sesión con una de las plataformas</h3>
        <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png' alt='Google' with='50px' height='50px' />
        <img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='Github' with='50px' height='50px' />
      </div>
    </div>
  );
}

export default SignIn;