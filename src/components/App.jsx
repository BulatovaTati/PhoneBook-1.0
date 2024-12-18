import { useState, useEffect } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { getTrendingMovies } from '../services/ApiRequests';
import s from './App.module.css';
import SharedLayout from './SharedLayout/SharedLayout';
import HomePage from '../pages/HomePage';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const MovieCast = lazy(() => import('./MovieDetails/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieDetails/MovieReviews/MovieReviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
