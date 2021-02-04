import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Components
import SignIn from './components/SignIn/SignIn.jsx'
import Register from './components/Register/Register.jsx'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
