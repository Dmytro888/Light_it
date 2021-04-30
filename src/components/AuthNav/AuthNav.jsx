import { useSelector, useDispatch } from 'react-redux';
import { getLogged } from '../../redux/auth/auth-selector';
import { logout } from '../../redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const Navigation = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector(getLogged);
  const handleLogout = () => dispatch(logout());

  return (
    <div>
      {!isLogged ? (
        <ul className={styles.registrationBar}>
          <li>
            <NavLink
              exact
              className={styles.link}
              activeClassName={styles.active}
              to='/register'
            >
              Register
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              className={styles.link}
              activeClassName={styles.active}
              to='/login'
            >
              Login
            </NavLink>
          </li>
        </ul>
      ) : (
        <span className={styles.logout} onClick={handleLogout}>
          Logout
        </span>
      )}
    </div>
  );
};

export default Navigation;
