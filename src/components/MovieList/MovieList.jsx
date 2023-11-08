import { MovieItem } from 'components/MovieItem/MovieItem';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';

export const MoviesList = ({ films }) => {
  return (
    <ul className={css.movieList}>
      {films.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
