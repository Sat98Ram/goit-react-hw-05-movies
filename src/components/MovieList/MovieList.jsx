import { MovieListItem } from './MovieListItem';
import css from './MovieList.module.css';

export const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieListItem movie={movie} location={location} key={movie.id} />
      ))}
    </ul>
  );
};
