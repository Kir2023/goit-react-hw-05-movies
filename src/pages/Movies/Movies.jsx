import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MovieList/MovieList';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from 'services/MoviesServices';
import css from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const movieName = searchParams.get('query') || '';

  const updateQuery = query => {
    const movieValue = query !== '' && { query };
    setSearchParams(movieValue);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setIsLoading(true);
        const films = await searchMovie(movieName);

        setMovies(films);
      } catch (err) {
        alert('Sorry, something goes wrong');
      } finally {
        setIsLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div className={css.movies}>
      <SearchMovie value={movieName} onSubmit={updateQuery} />
      {isLoading ? (
        <Loader />
      ) : movies.length === 0 && movieName ? (
        <h2 className={css.header}>Nothing found</h2>
      ) : (
        <MoviesList films={movies} />
      )}
    </div>
  );
};

export default Movies;
