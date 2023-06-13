import { getMovie } from 'services/movies-service';
import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();

  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    getMovie(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);
  if (!movie) {
    return;
  }

  const votes = movie.vote_average;

  return (
    <>
      <Section>
        <Link to={location.state} className={css.btnReturn}>
          Go back
        </Link>
        <div className={css.movie}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="poster"
            width="320"
            className={css.poster}
          />
          <div className={css.movieInfo}>
            <h1>{movie.title}</h1>
            <p>User popularity: {Math.round(votes * 10)}%</p>
            <h2>Overview</h2>
            <p>{movie.overview}</p>
            <h2>Genres</h2>
            <ul>
              {movie.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <h2>Release date:</h2> <p>{movie.release_date}</p>
          </div>
        </div>
        <p className={css.textInfo}>Additional information</p>
        <Link to={`reviews`} location={location} className={css.sectionLink}>
          Reviews
        </Link>
        <Link to={`cast`} location={location} className={css.sectionLink}>
          Cast
        </Link>
      </Section>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
