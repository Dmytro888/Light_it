import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Navigation.module.css';

function Navigation () {
  return (
    <div>
      <NavLink className={styles.logo} exact activeClassName='' to='/'>
        LIGHT IT
      </NavLink>
    </div>
  );
}

export default Navigation;
