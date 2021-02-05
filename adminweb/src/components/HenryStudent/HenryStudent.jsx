import React, { useState } from 'react';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBAr/SideNAvBar'

function HenryStudent() {
  const [state, setState] = useState({
    correo: '',
    checkeado: '',
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
      <Header />
      <SideNavBar />

      <div className='panel-estudiantes'>
        <h2>Panel Estudiantes Henry</h2>
        <div className='detalle-seleccion'>
          <h4>Nicolas Valencia</h4>
        </div>

        <div className='invitar-henry'>
          <h4>Invitar a un nuevo Henry</h4>
          <div className='info'>
            <h4>Puedes invitar a 1 o mas Henry Students</h4>
            <p>Para invitar a un Henry tiene que escribir el correo al cual va a llegar la invitación, en caso de invitar varios Henry Students lo pude hacer importando una Planilla Excel desde su ordenador</p>
          </div>

          <div className='enviar-un-mail'>
            <form onSubmit={handleSubmit}>
              <input type='email' placeholder='Ingresa el email de destino' name='correo' value={state.correo} onChange={handleInputChange} />
              <label>
                Seguro que desea enviar el email?
            <input name="checkeado" type="checkbox" checked={state.checkeado} onChange={handleInputChange} />
              </label>
              <div><input type="submit" value="Enviar Mail" /></div>
            </form>
          </div>
          <div className='enviar-excel'>
            <button>Enviar Excel</button>
          </div>
        </div>
      </div>

      <div className='lista-estudiantes'>
        <h4>Invitar a un nuevo Henry</h4>
        <table>
          <thead>
            <th>Nombre</th>
            <th>Github</th>
            <th>Correo</th>
            <th>Nacionalidad</th>
            <th>Rol</th>
            <th><button>Filtrar</button></th>
            <th><button>Limpiar</button></th>
          </thead>
          <tbody>
            <td>Nicolas Valencia</td>
            <td>git/nicohub</td>
            <td>nico@nico.com</td>
            <td>Colombiana</td>
            <td>Estudiante</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HenryStudent;