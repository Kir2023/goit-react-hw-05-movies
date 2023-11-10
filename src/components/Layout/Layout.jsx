import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
      }}
    >
      <header className="header">
        <NavLink className="header-link" to="/">
          Home
        </NavLink>
        <NavLink className="header-link" to="/movies">
          Movies
        </NavLink>
      </header>
      <main className={css.mainContainer}>{children}</main>
    </div>
  );
};

export default Layout;
