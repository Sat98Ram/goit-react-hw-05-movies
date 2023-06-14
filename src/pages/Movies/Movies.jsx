import { useState, useEffect } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { searchMovie } from 'services/movies-service';
import { Search } from 'components/Search/SearchInput';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import css from './Movies.module.css';
import { Section } from 'components/Section/Section';

const MoviesPage = movie => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    const getMovie = async () => {
      try {
        const data = await searchMovie(query);
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [query]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <Section>
      <Search onSubmit={onSubmit} />
      <Link to={'/'} className={css.btnReturn}>
        Go home
      </Link>
      <MovieList movies={movies} location={location} />
    </Section>
  );
};
export default MoviesPage;
