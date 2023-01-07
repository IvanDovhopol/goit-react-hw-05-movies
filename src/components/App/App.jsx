import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('components/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies/:id" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
