import React, { useEffect, useState } from 'react';
import firebase from '../../database/database'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

/* Estilos */
import {
  ContenedorPanel,
  DetalleUser,
  InfoSelect,
  ContCohorteSelect,
  ContenedorImagen,
  InvitarUsuario,
  ContInCard,
  InputForm,
  BtnForm,
  CalendarTimer,
  CheckBox,
  ListaEstudiantes,
  Table,
  Thead,
  Tbody
} from './StyledContents';
/* Import imagen */
import ImgEmpty from "../../assets/Img/empty.svg";
import ImgErr from "../../assets/Img/ErrorImg.jpg";
import ImgHenry from "../../assets/Img/henry_logo.jpg";

function Cohortes() {
  //===========COHORTES DE BASE DE DATOS===========//
  const [
    cohortes,
    setCohortes
  ] = useState([]);

  useEffect(() => {
    firebase.db.collection('cohorte').onSnapshot((snap) => {
      const allCohortes = [];
      snap.docs.forEach((doc) => {
        const { comienzo, fin, modalidad, instructor, nombre } = doc.data();
        allCohortes.push({
          nombre,
          id: doc.id,
          comienzo,
          fin,
          modalidad,
          instructor,
        });
      });
      setCohortes(allCohortes);
    });
  }, []);

  //===========CREAR COHORTE===========//

  //Botones Full Time - Part Time
  const [index, setIndex] = useState('')
  const buttons = ['Full Time', 'Part Time']
  const updateIndex = (i) => {
    setIndex(i)
    console.log('MODALIDAD:', (buttons[index]))
    handleChangeText(buttons[i], 'modalidad')
  }

  //DatePicker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndtDate] = useState(new Date());

  const handleDatePickedStart = (date) => {
    let newDate = date && date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_inicio')
  }
  const handleDatePickedEnd = (date) => {
    let newDate = date && date.toString().split(" ")
    let returnDate = [newDate[2], getMonthOfDate(newDate[1]), newDate[3]]
    handleChangeText(returnDate.join("/"), 'fecha_de_finalizacion')
  };

  const getMonthOfDate = name => {
    return ("JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(name) / 3 + 1)
  }

  useEffect(() => {
    handleDatePickedStart(startDate)
  }, [startDate])

  useEffect(() => {
    handleDatePickedEnd(endDate)
  }, [endDate])

  //Numero de Cohorte List
  const [check, setCheck] = useState('')
  const handleCheckBox = (e) => {
    setCheck(e.target.value);
    handleChangeText(check, 'checkeado')
  }

  //Estado Inicial de Crear Cohorte 
  const initalState = {
    numero_de_cohorte: '',
    modalidad: '',
    fecha_de_inicio: '00/00/0000',
    fecha_de_finalizacion: '00/00/0000',
    instructor: '',
    checkeado: ''
  };

  const [state, setState] = useState(initalState);
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
    console.log('state', state)
  };

  //===========CREAR COHORTE EN FIREBASE===========//
  const saveNewCohorte = async () => {
    for (var i = 0; state.length < i; i++) {
      console.log(state[i]);
    }
    if (state.modalidad === '') {
      alert('Ingrese modalidad');
    }
    if (state.fecha_de_inicio === '') {
      alert('Ingrese fecha de inicio');
    }
    if (state.fecha_de_finalizacion === '') {
      alert('Ingrese fecha de finalizacion');
    }
    if (state.instructor === '') {
      alert('Ingrese un instructor');
    }
    if (state.checkeado !== 'on') {
      return alert(`Checkear box de seguridad!`)
    }
    else {
      try {
        await firebase.db.collection('cohorte').add({
          nombre: state.numero_de_cohorte,
          modalidad: state.modalidad,
          comienzo: state.fecha_de_inicio,
          fin: state.fecha_de_finalizacion,
          instructor: state.instructor,
        });
        alert(`Cohorte N°: ${state.numero_de_cohorte} creada con exito!`);
      } catch (error) {
        alert('Hubo un error al crear la Cohorte!');
      }
    }
  };

  //===========ELIMINA COHORTE===========//

  const eliminarCohorte = async (id) => {
    console.log(id)
    let r = window.confirm("Esta seguto de eliminar el Cohorte seleccionado?");
    try {
      if (r) {
        const algo = await firebase.db.collection('cohorte').doc(id).delete()
        console.log(algo)
        alert('Cohorte Eliminado!')
      } else {
        console.log('Nothing to delete')
      }
    } catch (err) {
      alert(err)
    }
  }
  //===========SELECCIONA COHORTE===========//
  const [cohorte, setCohorte] = useState(false)

  const handleEdit = async (item) => {




    //===========GRUPO DENTRO DE COHORTE===========//

    await firebase.db.collection('cohorte').doc(item.id).collection('grupos').onSnapshot((snap) => {
      const grupos = [];
      snap.docs.forEach((doc) => {
        const { alumnos, numero, pms } = doc.data();
        grupos.push({
          alumnos,
          numero,
          pms
        })
      })
      setCohorte({ ...item, grupos: grupos })
    })
    console.log('Cohorte', cohorte)
  }



  return (
    <div>
      <ContenedorPanel className='panel-estudiantes'>
        <h2>Panel Cohortes Henry</h2>
        <DetalleUser >
          <h4>Selecciona un Cohorte</h4>
          {!cohorte
            ? <InfoSelect>
              <h3> Seleccione una Cohorte para conocer sus detalles</h3>
              <div className='img-user'>
                <img src={ImgEmpty} alt='avatar' />
              </div>
            </InfoSelect>
            : <ContCohorteSelect>
              <ContenedorImagen>
                <div>
                  <img src={ImgHenry} alt='avatar' with='50px' height='50px' />
                </div>
                <h3>HENRY WORLD</h3>
              </ContenedorImagen>
              <h3>Chorte {cohorte.nombre}</h3>
              <label><strong>Instructor a cargo:</strong>{cohorte.instructor}</label>
              <label><strong>Fecha de Inicio:</strong>{cohorte.comienzo}</label>
              <label><strong>Fecha de Finalizacion:</strong>{cohorte.fin}</label>
              <label><strong>Modalidad:</strong>{cohorte.modalidad}</label>
              <label><strong>Grupos:</strong><br/>{cohorte.grupos.length  ? cohorte.grupos.map((i) => <><button>{i.numero}</button></>) : <label>No Asignado</label>}</label>
            </ContCohorteSelect>}
        </DetalleUser>
        <InvitarUsuario >
          <h4>Crea una nueva Cohorte</h4>
          <ContInCard>
            <div className='info'>
              <h4>Un nuevo comienzo para futuros Henry's</h4>
              <p>Crea una Cohorte donde nuevos estudiantes
              de henry inician un cambio en su vida
              profesional, ayudando con su formación y aprendizaje.
              </p>
            </div>

            <div className="cont-form">
              <InputForm >
                <label>Cohorte N°:</label><br />
                <select value={state.numero_de_cohorte} onChange={(e) => handleChangeText(e.target.value, 'numero_de_cohorte')}>
                  <option value="01" >01</option>
                  <option value="02" >02</option>
                  <option value="03" >03</option>
                  <option value="04" >04</option>
                  <option value="05" >05</option>
                  <option value="07" >07</option>
                  <option value="08" >08</option>
                  <option value="09" >09</option>
                  <option value="10" >10</option>
                  <option value="11" >11</option>
                  <option value="12" >12</option>
                  {state.numero_de_cohorte}
                </select>
              </InputForm>
              <InputForm>
                <label>Modalidad:</label>
                <BtnForm>
                  <button
                    onClick={() => updateIndex(0)}
                    style={{ border: index === 0 ? '1px solid black' : 'none' }}>
                    Full Time
                    </button>
                  <button
                    onClick={() => updateIndex(1)}
                    style={{ border: index === 1 ? '1px solid black' : 'none' }} >
                    Part Time
                    </button>
                </BtnForm>
              </InputForm><br />
              <InputForm>
                <label>Fecha de inicio:</label><br />
                <CalendarTimer>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                  />
                  <i className="calendar-alt"></i>
                </CalendarTimer>
              </InputForm>
            </div>
            <div className="cont-form">
              <InputForm>
                <label>Fecha de finalizacion:</label><br />
                <CalendarTimer>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={endDate}
                    onChange={date => setEndtDate(date)}
                  />
                  <i className="calendar-alt"></i>
                </CalendarTimer>
              </InputForm>
              <InputForm >
                <label>Instructor</label><br />
                <select value={state.instructor} onChange={(e) => handleChangeText(e.target.value, 'instructor')}>
                  <option value="Franco Etcheverry" >Franco Etcheverry</option>
                  <option value="Toni Tralice" >Toni Tralice</option>
                  {state.instructor}
                </select>
              </InputForm>
              <CheckBox>
                <input name="checkeado" type="checkbox" onClick={handleCheckBox} />
                <label>
                  Seguro que desea crear un nuevo Cohorte?
                  </label>
              </CheckBox>
              <button className='btn-email' onClick={saveNewCohorte}>
                CREAR COHORTE
                </button>
            </div>

          </ContInCard>
        </InvitarUsuario>
      </ContenedorPanel>

      <ListaEstudiantes>
        <h2>Lista de Cohortes de Henry</h2>
        <Table>
          <Thead>
            <tr>
              <th>Cohorte</th>
              <th>Modalidad</th>
              <th>Fecha de Inicio</th>
              <th>Fecha de Finalizacion</th>
              <th>Instructor</th>
              <th></th>
              <th></th>
            </tr>
          </Thead>
          <Tbody>
            {cohortes && cohortes.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <img src={ImgHenry} alt='item-avatar' with='30px' height='30px' />
                    {' '}<strong>{item.nombre}</strong>
                  </div>
                </td>
                <td>{item.modalidad}</td>
                <td>{item.comienzo}</td>
                <td>{item.fin}</td>
                <td>{item.instructor}</td>
                <td><button onClick={() => { handleEdit(item) }} >Ver</button></td>
                <td><button onClick={() => { eliminarCohorte(item.id) }}>Delete</button></td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ListaEstudiantes>
    </div>
  );
}

export default Cohortes;