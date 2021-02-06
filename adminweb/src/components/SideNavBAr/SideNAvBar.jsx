import React from 'react';
import { Link } from 'react-router-dom';


function SideNavBar() {
  return (
    <div>
      <div>
        <Link><image src='https://image.freepik.com/free-icon/logout_318-10026.jpg' alt='LogOutImg'/></Link>
      </div>
      <div>
        <Link><image src='https://cdn.iconscout.com/icon/premium/png-256-thumb/student-book-783952.png' alt='HenryStudent' /></Link>
      </div>
      <div>
        <Link><image src='https://image.flaticon.com/icons/png/512/130/130304.png' alt='Cohorte'/></Link>
      </div>
      <div>
        <Link><image src='https://www.creativefabrica.com/wp-content/uploads/2020/03/08/Graduation-hat-icon-Graphics-3387856-1-1-580x386.jpg' alt='Instructores'/></Link>
      </div>
    </div>
  );
}

export default SideNavBar;