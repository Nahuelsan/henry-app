import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../database/database'

function SignIn() {

  const initalState = {
    password: '',
    email: ''
  };

  const [
    users,
    setUsers
  ] = useState([]);
  const [
    invitedUsers,
    setInvitedUsers
  ] = useState([]);

  const [
    state,
    setState
  ] = useState(initalState);

  useEffect(() => {
    firebase.db.collection('invited instructor').onSnapshot((snap) => {
      const invitados = [];
      snap.docs.forEach((doc) => {
        const { email } = doc.data();
        invitados.push({
          email

        });
      });
      setInvitedUsers(invitados);

    });
    firebase.db.collection('users').onSnapshot((snap) => {
      const estudiantes = [];
      snap.docs.forEach((doc) => {
        const { email, rol, first_name, last_name, nacionalidad, photo, dni, github, phone, cohorte, grupo } = doc.data();
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
          id: doc.id
        });
      });
      setUsers(estudiantes);

    });
  }, []);

  const handleInputChange = function (e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
    
  }

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log('works!')
  }


  const loginManual = async () => {
    
    if (state.email === '' || state.password === '') {
      if (state.email === '' || !state.email.includes('@')) {
        alert('Ingrese un email válido');
      }
      if (state.password === '') {
        alert('Ingrese un password');
      }
    }
    else {
      var found = users.find((user) => user.email === state.email);
      if (found) {
        firebase.firebase
          .auth()
          .signInWithEmailAndPassword(state.email, state.password)
          .then((result) => {
            console.log(result)
            if (found.rol === 'admin' || found.rol === 'instructor') {
              console.log('admin')
              window.location.href = 'http://localhost:3000/henrystudent';
            }
            else {
              // alert('Eres estudiante por favor dirijite a la app')
            }
          })
          .catch((error) => {
            alert(error);
          });
      }
      else {
        alert('El usuario no se ha registrado aún o no ha sido invitado');
      }
    }
  };



  const loginGoogle = async () => {
    console.log('se ejecuta la funcionLoginGoogle');
    firebase.firebase
    	.auth()
    	.signInWithPopup(new firebase.firebase.auth.GoogleAuthProvider())
    	.then((result) => {
 ;
    		var found = invitedUsers.find((user) => user.email === result.user.email);
    		var found2 = users.find((user) => user.email === result.user.email);
        console.log("found2",found2)
    		if(!found){
    			throw 'El email no se encuentra en la base de datos de estudiantes invitados :(';
    		}
    		if(!found2){
          console.log('registrese ')
          window.location.href = 'http://localhost:3000/register';
        

    		}
    		if (found2) {
    			if (found2.rol === 'admin') {
            console.log('admin ')
            window.location.href = 'http://localhost:3000/henrystudent';
    			}
    			else {
            throw 'Eres estudiante por favor dirijite a la app'
    			}
    		}
    	})
    	.catch((error) => {
    		alert(error);
    	});
  };

  const loginGithub = async () => {
    console.log('se ejecuta la funcionLoginGithub');
    firebase.firebase
      .auth()
      .signInWithPopup(new firebase.firebase.auth.GithubAuthProvider())
      .then((result) => {
        var found = invitedUsers.find((user) => user.email === result.user.providerData[0].email);
        var found2 = users.find((user) => user.email === result.user.providerData[0].email);
        if (!found) {
          throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
        }
        if (!found2) {
          window.location.href = 'http://localhost:3000/register';
        }
        if (found2) {
          if (found2.rol === 'admin') {
            console.log('admin') 
            window.location.href = 'http://localhost:3000/henrystudent';
          }
          else {
            throw 'Eres estudiante por favor dirijite a la app'
          }
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

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
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="email"
          placeholder="Correo" 
          name="email" 
            value={state.email}
          onChange={handleInputChange} 
          /><br />

          <input 
          type="password" 
          placeholder="Contraseña"
            name="password" 
            value={state.password}
          onChange={handleInputChange} 
          />

          <div>
            <input 
            type="submit" 
            value="Iniciar Sesión"
            onClick={loginManual} 
             />
          </div>
        </form>
        <h3>O inicia sesión con una de las plataformas</h3>
        <img 
        src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png' 
        alt='Google' 
        with='50px' 
        height='50px' 
          onClick={loginGoogle}
        />
        <img 
        src='https://image.flaticon.com/icons/png/512/25/25231.png' 
        alt='Github' 
        with='50px' 
        height='50px'
          onClick={loginGithub}

         />
      </div>
    </div>
  );
}

export default SignIn;