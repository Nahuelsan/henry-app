import React, { useEffect, useState } from 'react';
import firebase from '../../database/database'
import DatePicker from 'react-datepicker'
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
import ImgHenry from "../../assets/Img/henry_logo.jpg";

function Cohortes() {
  //Traer usuarios de la base de datos
  const [
    cohortes,
    setCohortes
  ] = useState([]);

  useEffect(() => {
    firebase.db.collection('cohorte').onSnapshot((snap) => {
      const allCohortes = [];
      snap.docs.forEach((doc) => {
        const { comienzo, fin, modalidad, instructor, nombre, id } = doc.data();
        allCohortes.push({
          comienzo,
          fin,
          modalidad,
          instructor,
          nombre,
          id
        });
      });
      setCohortes(allCohortes);
    });
  }, []);
  console.log(cohortes)

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


  //Creacion de Cohorte en firebase
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
      alert('Ingrese fecha de finalizacio');
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
        alert(`Cohorte N°: ${state.nombre} creada con exito!`);
      } catch (error) {
        alert('Hubo un error al crear la Cohorte!');
      }
    }
  };

  //Selecciona una cohorte
  const [cohorte, setCohorte] = useState({})
  const handleEdit = (item) => {
    setCohorte(item)
    console.log('Cohorte', cohorte)
  }

  //CREAR COHORTE

  //Numero de Cohorte List
  const [numero, setNumero] = useState(state.numero_de_cohorte || {})
  const handleSelectedNumero = (e) => {
    setNumero(e.target.value);
    handleChangeText(numero, 'numero_de_cohorte')
  }

  //Botones Full Time - Part Time
  const [index, setIndex] = useState(1)
  const buttons = ['Full Time', 'Part Time']
  const updateIndex = (index) => {
    setIndex(index)
    handleChangeText(buttons[index], 'modalidad')
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

  //Instructores List
  const [instructor, setInstructor] = useState(state.instructor || {})
  const handleSelectedInstructor = (e) => {
    setInstructor(e.target.value);
    handleChangeText(instructor, 'instructor')
  }

  return (
    <div>
      <ContenedorPanel className='panel-estudiantes'>
        <h2>Panel Cohortes Henry</h2>
        <DetalleUser >
          <h4>Selecciona un Cohorte</h4>
          {cohorte.nombre &&
            <div>
              <image src={ImgHenry} alt='avatar' with='50px' height='50px' /><br />
              <h3>Chorte {cohorte.nombre}</h3><br />
              <label><strong>Instructor a cargo:</strong>{cohorte.instructor}</label><br />
              <label><strong>Numero de Grupos:</strong>{cohorte.grupos || 'No asignado'}</label><br />
              <label><strong>Fecha de Inicio:</strong>{cohorte.comienzo}</label><br />
              <label><strong>Fecha de Finalizacion:</strong>{cohorte.fin}</label><br />
              <label><strong>Modalidad:</strong>{cohorte.modalidad}</label><br />
            </div>}
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


            <InputCont >
              <label>Cohorte N°:</label>
              <input type="text"
                list="nombre"
                name="nombre"
                onChange={handleSelectedNumero} />
              <datalist id="nombre">
                <option value="01" />
                <option value="02" />
                <option value="03" />
                <option value="04" />
                <option value="05" />
                <option value="06" />
                <option value="07" />
                <option value="08" />
                <option value="09" />
                <option value="10" />
                <option value="11" />
                <option value="12" />
                <option value="13" />
                <option value="14" />
                <option value="15" />
              </datalist>
            </InputCont>

            <InputCont>
              <label>Modalidad:</label>
              <button
                onClick={() => updateIndex(0)}>
                Full Time
            </button>
              <button
                onClick={() => updateIndex(1)}>
                Part Time
            </button>
            </InputCont>

            
              <label>Fecha de inicio:</label>
              <label>{state.fecha_de_inicio}</label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
              />
              <i className="calendar-alt"></i>
            

           
              <label>Fecha de finalizacion:</label>
              <label>{state.fecha_de_finalizacion}</label>
              <DatePicker
                selected={endDate}
                onChange={date => setEndtDate(date)}
              />
              <i className="calendar-alt"></i>
           

            <InputCont >
              <label>Instructor:</label>
              <input type="text"
                list="instructor"
                name="instructor"
                onChange={handleSelectedInstructor} />
              <datalist id="instructor">
                <option value="Franco Etcheverry" />
                <option value="Toni Tralice" />
              </datalist>
            </InputCont>

            <button onClick={() => saveNewCohorte}>
              CREAR COHORTE
          </button>

            <CheckBox>
              <input name="checkeado" type="checkbox" checked={state.checkeado} onChange={handleChangeText} />
              <label>
                Seguro que desea crear la Chorte?
                </label>
            </CheckBox>





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
              <th>Decha de Finalizacion</th>
              <th>Instructor</th>
              <th><button>Filtrar</button></th>
              <th><button>Limpiar</button></th>
            </tr>
          </Thead>
          <Tbody>
            {cohortes && cohortes.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <img src={ImgHenry} alt='item-avatar' with='30px' height='30px' />
                    {' '}{item.nombre}
                  </div>
                </td>
                <td>{item.modalidad}</td>
                <td>{item.comienzo}</td>
                <td>{item.fin}</td>
                <td>{item.instructor}</td>
                <td><button onClick={() => { handleEdit(item) }} >Edit</button></td>
                <td><button>Delete</button></td>
              </tr>
            ))}
          </Tbody>
        </Table>
      </ListaEstudiantes>
    </div>
  );
}

export default Cohortes;