import { getMovie } from 'services/movies-service';
import { Suspense, useEffect, useState } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';
import css from './MovieDetails.module.css';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { MoreInfo } from 'components/MovieInfo/MoreInfo';

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
        <MovieInfo
          poster={movie.poster_path}
          title={movie.title}
          overview={movie.overview}
          genres={movie.genres}
          date={movie.release_date}
          votes={votes}
        />

        <MoreInfo state={location.state} />
      </Section>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default MovieDetails;
