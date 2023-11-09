import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/MoviesServices';
import css from './MovieDetails.module.css';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const movieDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (err) {
        alert('Sorry, something goes wrong');
      }
    };
    movieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  const { poster_path, title, vote_average, genres, overview } = movieDetails;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className={css.container}>
      <NavLink to={backLink.current}>
        <button type="button" className={css.goBackButton}>
          Go back
        </button>
      </NavLink>
      <div className={css.movieContainer}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : defaultImg
          }
          alt={title}
          width="300px"
          height="100%"
          className={css.poster}
        />
        <div className={css.movieText}>
          <h1 className={css.movieHeader}>{title ? title : 'No Info'}</h1>
          <p className={css.text}>
            <b>Average rating:</b>{' '}
            {vote_average ? Math.round(vote_average * 10) : 0}%
          </p>
          <p className={css.text}>
            <b>Overview:</b> {overview ? overview : 'No Info'}
          </p>
          <p className={css.text}>
            <b>Genres:</b>{' '}
            {genres.length > 0
              ? genres.map(value => value.name).join(', ')
              : 'No Info'}
          </p>
        </div>
      </div>
    </div>
  );
};
