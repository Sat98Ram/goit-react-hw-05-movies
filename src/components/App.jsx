import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

// import HomePage from 'pages/Home/Home';
// import MoviesPage from 'pages/Movies/Movies';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from './Reviews/Reviews';
// import Cast from './Cast/Cast';

import { lazy } from 'react';
const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Cast = lazy(() => import('./Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
