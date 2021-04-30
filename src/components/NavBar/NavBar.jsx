import React from 'react';

import Navigation from '../Navigation';
import AuthNav from '../AuthNav';

import Container from '../Container';
import styles from './NavBar.module.css';

function NavBar () {
  return (
    <header className={styles.mainHeader}>
      <Container>
        <div className={styles.mainNavigation}>
          <Navigation />
          <AuthNav />
        </div>
      </Container>
    </header>
  );
}

export default NavBar;
