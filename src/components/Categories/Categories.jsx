import { Link } from 'react-router-dom';

import categories from '../../db/categories.json';

import Container from '../Container';
import styles from './Categories.module.css';

function Categories () {
  return (
    <Container>
      <div className={styles.categoriesContainer}>
        <div>
          <h2 className={styles.pageTitle}>Choose your category</h2>
        </div>
        <ul className={styles.list}>
          {categories.map(({ img, title, fetch }) => (
            <li className={styles.item} key={title}>
              <Link
                to={{
                  pathname: `/products/${title.toLocaleLowerCase()}`,
                  state: { fetch: fetch },
                }}
              >
                <img className={styles.img} src={img} alt='img' />
                <h2 className={styles.title}>{title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default Categories;
