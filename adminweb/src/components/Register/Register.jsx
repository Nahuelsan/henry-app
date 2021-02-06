import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../database/database';


function Register() {
  const [state, setState] = useState({
    email: '',
    password: '',
    password_checked: '',

  })
  const [
    users,
    setUsers
  ] = useState([]);
  const [
    invitedUsers,
    setInvitedUsers
  ] = useState([]);
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
    console.log(state)
  }

  const saveNewUser = async () => {
    if (state.email === '') {
      alert('Ingrese un email');
    }
    if (state.password === '') {
      alert('Ingrese un password');
    }
    if (state.password_checked === '') {
      alert('Verifique contraseña');
    }
    if (state.password !== state.password_checked) {
      alert('Las claves no coinciden');
    }
    else {
      try {
        let snapshot = await firebase.db.collection('invited users').where("email", "==", state.email).get()
        if (!snapshot.empty) {
          // firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
          alert("Eres estudiante por favor registarte en la aplicación movil")
        } else {
          let newSnapshot = await firebase.db.collection('invited instructor').where("email", "==", state.email).get()
          if (!newSnapshot.empty) {
            firebase.firebase.auth().createUserWithEmailAndPassword(state.email, state.password)
            firebase.db.collection('users').add({
              first_name: 'default',
              last_name: 'default',
              email: state.email,
              phone: 'default',
              dni: 'default',
              nacionalidad: 'default',
              github: 'dafiult',
              rol: 'admin',
              photo: 'default',
            });
            window.location.href = 'http://localhost:3000/';
          }
        }
      } catch (error) {
        console.log(error);
        alert('Error');
      }
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
 
  }
  const loginGoogle = async () => {
    console.log('se ejecuta la funcionLoginGoogle');
    firebase.firebase
      .auth()
      .signInWithPopup(new firebase.firebase.auth.GoogleAuthProvider())
      .then(async (result) => {
        console.log(result.additionalUserInfo.profile)
        console.log(result)
        var found = invitedUsers.find((user) => result.user.email === user.email);
        if (!found) {
          throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
        }else{
          await firebase.db.collection('users').add({
            first_name: result.additionalUserInfo.profile.given_name,
            last_name: result.additionalUserInfo.profile.family_name,
            email: result.user.email,
            phone: 'default',
            dni: 'default',
            nacionalidad: 'default',
            github: 'dafiult',
            rol: 'admin',
            photo: result.additionalUserInfo.profile.picture,
          });
           window.location.href = 'http://localhost:3000/';
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
      .then(async (result) => {
        console.log(result.additionalUserInfo.profile.name);
        var found = invitedUsers.find((user) => user.email === result.user.providerData[0].email);
        console.log(found)
        if (!found) {
          throw 'el email no se encuentra en la base de datos de estudiantes invitados :(';
        }
         else {
          await firebase.db.collection('users').add({
            first_name: result.additionalUserInfo.profile.name,
            last_name: 'default',
            email: result.user.providerData[0].email,
            phone: 'default',
            dni: 'default',
            nacionalidad: 'default',
            github: 'dafiult',
            rol: 'admin',
            photo: 'default',
          });
          window.location.href = 'http://localhost:3000/';
        }
      })
 
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <div>
        <h2>Regístrate</h2>
        <form onSubmit={handleSubmit}>

          <input
           type="email" 
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
          /><br />

          <input 
          type="password" 
          placeholder="Confirma tu conraseña" 
          name="password_checked"
          value={state.password_checked } 
          onChange={handleInputChange} 
          />

          <div>
            <input 
            type="submit" 
            value="Registrarse"  
            onClick={saveNewUser}
            />
          </div>

        </form>
        <h3>O registrate con una de las plataformas</h3>

        <img 
        src='https://cdn2.iconfinder.com/data/icons/font-awesome/1792/google-512.png' 
        alt='Google' 
        with='50px' 
        height='50px' 
        onClick={() =>loginGoogle()}
        />

        <img 
        src='https://image.flaticon.com/icons/png/512/25/25231.png' 
        alt='Github' 
        with='50px' 
        height='50px'
          onClick={loginGithub}
        />

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