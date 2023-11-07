import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

export const MovieItem = ({ id, poster_path, title }) => {
  const location = useLocation();

  return (
    <li key={id}>
      <NavLink to={`/movies/${id}}`} state={{ from: location }}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width="190px"
        />
        <p>{title}</p>
      </NavLink>
    </li>
  );
};

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};
