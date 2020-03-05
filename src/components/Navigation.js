import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Styles.module.css';
import routes from '../routes';

const Navigation = () => (
  <ul className={styles.Navigation}>
    <li>
      <NavLink
        exact
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={routes.movies}
        className={styles.NavLink}
        activeClassName={styles.NavLinkActive}
      >
        Movies
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
