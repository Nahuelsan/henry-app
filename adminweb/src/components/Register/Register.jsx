import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Register() {
  const [state, setState] = useState({
    correo: '',
    contraseña: '',
    confirmacion: ''
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
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Correo" name="correo" value={state.correo} onChange={handleInputChange} /><br />
          <input type="password" placeholder="Contraseña" name="contraseña" value={state.contraseña} onChange={handleInputChange} /><br />
          <input type="password" placeholder="Confirma tu conraseña" name="confirmacion" value={state.confirmacion} onChange={handleInputChange} />
          <div><input type="submit" value="Registrarse" /></div>
        </form>
        <h3>O registrate con una de las plataformas</h3>
        <img src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png' alt='Google' with='50px' height='50px' />
        <img src='https://image.flaticon.com/icons/png/512/25/25231.png' alt='Github' with='50px' height='50px' />

      </div>
      <div>
        <div>
          <h2>Eres uno de nosotros?</h2>
          <p>Si ya eres parte de la familia Henry Admin, inicia sesión con tu usuario</p>
          <button><Link to='/'>Inicia Sesión</Link></button>
        </div>
        <img src='https://pbs.twimg.com/profile_images/686596277904273409/hocE2na7.jpg' alt='RegisteImage' />
      </div>
    </div>
  );
}

export default Register;