import Container from '../Container';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.mainFooter}>
      <Container>
        <p className={styles.mainFooterText}>All rights reserved &#169; 2021</p>
      </Container>
    </footer>
  );
};

export default Footer;
