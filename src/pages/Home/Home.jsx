import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from 'services/MoviesServices';
import css from './Home.module.css';
import { MoviesList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movie = await fetchPopularMovies;
        setPopularMovies(movie);
      } catch (err) {
        alert('Sorry, something goes wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1 className={css.moviesHeder}>The most popular films today</h1>
      {isLoading
        ? alert('Loading')
        : popularMovies.length > 0 && <MoviesList films={popularMovies} />}
    </div>
  );
};
