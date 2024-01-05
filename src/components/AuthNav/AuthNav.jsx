import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.linksList}>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Registration
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.link} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        Login
      </NavLink>
    </div>
  );
};
