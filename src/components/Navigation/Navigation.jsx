import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/useAuth';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div className={css.navWrapper}>
      <div className={css.logoWrapper}>
        <span className={css.logoName}>PhoneBook</span>
        <span className={css.logoDownTxt}>
        Have reliable contacts
        </span>
      </div>
      <nav className={css.linksList}>
        <NavLink
          className={({ isActive }) =>
            `${css.link} ${isActive ? css.active : ''}`
          }
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.active : ''}`
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
