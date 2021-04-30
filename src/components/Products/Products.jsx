import { useEffect, useState } from 'react';
import Axios from 'axios';
import { useLocation, Link } from 'react-router-dom';

import styles from './Products.module.css';

Axios.defaults.baseURL = 'https://smktesting.herokuapp.com';

const Products = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const query = location?.state?.fetch;

  useEffect(() => {
    const response = async products => await Axios.get(`/api/${products}`);
    if (query === 'products') {
      response(query).then(result => {
        setProducts(result.data);
      });
    } else setProducts('No products in this category');
  }, [query]);

  return (
    <div>
      {(typeof products === 'object' && (
        <ul className={styles.list}>
          {products.map(({ id, title, img, text }) => (
            <li className={styles.item} key={id}>
              <Link
                to={{
                  pathname: `/product-detail/${id}`,
                  state: { id, title, img, text, from: location },
                }}
              >
                <img
                  className={styles.img}
                  src={`http://smktesting.herokuapp.com/static/${img}`}
                  alt='img'
                />
                <h2 className={styles.title}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )) || <p className={styles.emptyList}>{products}</p>}
    </div>
  );
};

export default Products;
