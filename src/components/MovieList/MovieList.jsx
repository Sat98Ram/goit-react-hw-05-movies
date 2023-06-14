import { MovieListItem } from './MovieListItem';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

export const MovieList = ({ movies, location }) => {
  return (
    <ul className={css.movieList}>
      {movies.map(movie => (
        <MovieListItem movie={movie} location={location} key={movie.id} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  location: PropTypes.object,
};
