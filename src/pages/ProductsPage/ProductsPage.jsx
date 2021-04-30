import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import styles from './ProductsPage.module.css';
import Products from '../../components/Products';

const ProductsPage = () => {
  return (
    <Container>
      <div className={styles.pageTitle}>
        <Link className={styles.linkBack} to='/'>
          &#8592;
          <span className={styles.linkBackTitle}>back to categories</span>
        </Link>
        <h2>Products list</h2>
      </div>
      <Products />
    </Container>
  );
};

export default ProductsPage;
