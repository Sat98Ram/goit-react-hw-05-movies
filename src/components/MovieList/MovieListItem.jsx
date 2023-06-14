import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

export const MovieListItem = ({ movie, location }) => {
  return (
    <li className={css.movieListItem}>
      <Link
        to={`/movies/${movie.id}`}
        state={location}
        className={css.movieLink}
      >
        <div className={css.poster}>
          {movie.poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt="poster"
              width="72"
              className={css.thumbnailPoster}
            />
          )}
        </div>
        <div>
          <h2 className={css.movieName}> {movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </Link>
    </li>
  );
};
