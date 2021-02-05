import React from 'react';
import LogedIn from '../LogedIn/LogedIn';


function Header() {
  return (
    <div>
      <div>
        <image src='https://henry-social-resources.s3-sa-east-1.amazonaws.com/LOGO-REDES-01_og.jpg' alt='HenryLogo' with='50px' height='50px'/>
        <h3>HENRY WORLD</h3>
      </div>
      <LogedIn/>
    </div>
  );
}

export default Header;