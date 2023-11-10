import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/MoviesServices';
import css from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCast = async () => {
      try {
        const actors = await fetchCast(movieId);
        setCast(actors);
      } catch (err) {
        alert('Sorry, something goes wrong');
      }
    };
    movieCast();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div className={css.castContainer}>
      {cast.length !== 0 && (
        <div className={css.castListContainer}>
          <ul className={css.castList}>
            {cast.map(actor => (
              <li key={actor.id}>
                <img
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : defaultImg
                  }
                  alt={actor.original_name}
                />
                <p className={css.actorName}>{actor.name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cast.length === 0 && (
        <p className={css.noActorsText}>
          We don't have any cast for this movie.
        </p>
      )}
    </div>
  );
};
