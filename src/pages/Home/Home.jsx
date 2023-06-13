import { getTrending } from 'services/movies-service';
import { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { useLocation } from 'react-router-dom';
import { Section } from 'components/Section/Section';

const HomePage = () => {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await getTrending();
        console.log(data);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <Section title="Trending today">
      <MovieList movies={movies} location={location} />
    </Section>
  );
};
export default HomePage;
