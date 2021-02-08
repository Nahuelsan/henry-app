import React, { useEffect, useState } from 'react';
import firebase from '../../database/database'
import axios from 'axios';
/* Estilos */
import {
  ContenedorPanel,
  DetalleUser,
  InvitarUsuario,
  ContInCard,
  InputCont,
  CheckBox,
  ListaEstudiantes,
  Table,
  Thead,
  Tbody
} from './StyledContents';
/* Import imagen */
import ImgErr from "../../assets/Img/ErrorImg.jpg";
import ImgUser from "../../assets/Img/imgUser.png";

function HenryStudent() {
  //Traer usuarios de la base de datos
  const [
    users,
    setUsers
  ] = useState([]);

  useEffect(() => {
    firebase.db.collection('users').onSnapshot((snap) => {
      const estudiantes = [];
      snap.docs.forEach((doc) => {
        const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone, cohorte, grupo, id } = doc.data();
        if (rol === 'student') {
          estudiantes.push({
            cohorte,
            grupo,
            email,
            rol,
            first_name,
            last_name,
            nacionalidad,
            photo,
            dni,
            github,
            phone,
            id
          });
        }
      });
      setUsers(estudiantes);
    });
  }, []);
  console.log(users)

  //Envio de mail a servidor hosteado
  const axiosEmail = (mail) => {
    axios.post('https://henry-express.herokuapp.com/',
      {
        to: mail,
        message: `Buenas tardes`,
        subject: "hola prueba app henry"
      })
      .then(() => {
        firebase.db.collection('invited users').add({
          email: mail
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //Formulario de Mail a nuevo Henry
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

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!state.correo.includes('@') || !state.correo.includes('.') || state.correo === '') {
      return alert(`Email invalido`)
    }
    try {
      await axiosEmail(state.correo)
      setState({
        correo: '',
        checkeado: '',
      });
      alert('Correo Enviado Exitosamente!');
    } catch (err) {
      alert('Ocurrio un error! Intentelo nuevamente')
    }
  }

  //Editar Alumno
  const [alumno,setAlumno]=useState({})
  const handleEdit = (user) => {
     setAlumno(user)
    console.log('Alumno', user)
  }

  return (
    <div>
      <ContenedorPanel className='panel-estudiantes'>
        <h2>Panel Estudiantes Henry</h2>
        <DetalleUser >
          <h4>Selecciona un Estudiante</h4>
          {/* {alumno && <h4>Selecciona un Estudiante</h4>}
          {alumno && 
          <div>
            <image src={alumno.photo} alt='avatar' with='50px' height='50px'/>
            <h5>{alumno.first_name}</h5>
            <h5>{alumno.last_name}</h5>
            <h5>{alumno.nacionalidad}</h5>
            <h5>{alumno.dni}</h5>
            <h5>{alumno.phone}</h5>
            <h5>{alumno.cohorte}</h5>
            <h5>{alumno.grupo}</h5>
            <h5>{alumno.email}</h5>
            <h5>{alumno.email}</h5>
          </div>
          } */}
        </DetalleUser>
        <InvitarUsuario >
          <h4>Invitar a un nuevo Henry</h4>
          <ContInCard>
            <div className='info'>
              <h4>Puedes invitar a 1 o mas Henry Students</h4>
              <p>Para invitar a un Henry tiene que escribir el correo al cual va a llegar la invitación, en caso de invitar varios Henry Students lo pude hacer importando una Planilla Excel desde su ordenador</p>
            </div>
            <form className='enviar-un-mail' onSubmit={handleSubmit}>
              <InputCont >
                <input 
                  type='email' 
                  placeholder='Ingresa el email de destino' 
                  name='correo' 
                  value={state.correo} 
                  onChange={handleInputChange} 
                />
              </InputCont>
              <CheckBox>
                <input name="checkeado" type="checkbox" checked={state.checkeado} onChange={handleInputChange} />
                <label>
                  Seguro que desea enviar el email?
                </label>
              </CheckBox>
              <input className='btn-email' type="submit" value="Enviar Mail" />
            </form>
            <div className='enviar-excel'>
              <h4>Sube un Excel desde tu PC</h4>
              <div className='img-user'>
                <img src={ImgErr} alt='avatar' />
              </div>
              <button>Enviar Excel</button>
            </div>
          </ContInCard>
        </InvitarUsuario>
      </ContenedorPanel>

      <ListaEstudiantes>
        <h2>Lista de estudiantes de Henry</h2>
        <Table>
          <Thead>
            <tr>
              <th>Nombre</th>
              <th>Github</th>
              <th>Correo</th>
              <th>Nacionalidad</th>
              <th>Rol</th>
              <th><button>Filtrar</button></th>
              <th><button>Limpiar</button></th>
            </tr>
          </Thead>
          <Tbody>
            {users && users.map((user, index) => (
              <tr key={index}>
                <td>
                  <div>
                  {user.photo ? <img src={user.photo} alt='user-avatar' with='30px' height='30px' /> 
                        : <img src={ImgUser} alt='user-avatar' with='30px' height='30px' />}
                  {user.first_name}{' '}{user.last_name}
                  </div> 
                  </td>
                <td>{user.github}</td>
                <td>{user.email}</td>
                <td>{user.nacionalidad}</td>
                <td>{user.rol}</td>
                <td><button onClick={() => { handleEdit(user) }} >Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ListaEstudiantes>
    </div>
  );
}

export default HenryStudent;