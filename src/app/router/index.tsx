import { lazy } from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import { AppLayout } from "../../layout";
import SessionPage from "../../pages/Session";

import { ProtectedRoute } from "./ProtectedRoute";

const HomePage = lazy(() => import("../../pages/Home"));

// /movies
const RecommendedMoviesPage = lazy(() => import("../../pages/RecommendedMovies"));
const MoviePage = lazy(() => import("../../pages/Movie"));
const MoviesPage = lazy(() => import("../../pages/Movies"));
const MovieWatchlistPage = lazy(() => import("../../pages/MovieWatchlist"));
const RatedMoviesPage = lazy(() => import("../../pages/RatedMovies"));
const FavoriteMoviesPage = lazy(() => import("../../pages/FavoriteMovies"));

// /shows
const RecommendedShowsPage = lazy(() => import("../../pages/RecommendedShows"));
const ShowsPage = lazy(() => import("../../pages/Shows"));
const ShowPage = lazy(() => import("../../pages/Show"));
const ShowsWatchlistPage = lazy(() => import("../../pages/ShowsWatchlist"));
const RatedShowsPage = lazy(() => import("../../pages/RatedShows"));
const FavoriteShowsPage = lazy(() => import("../../pages/FavoriteShows"));

// /person
const PersonPage = lazy(() => import("../../pages/Person"));

const NotFoundPage = lazy(() => import("../../pages/NotFound"));

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<HomePage />} />

      <Route path="/movie">
        <Route index element={<MoviesPage />} />
        <Route path=":id" element={<MoviePage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="recommended" element={<RecommendedMoviesPage />} />
          <Route path="watchlist" element={<MovieWatchlistPage />} />
          <Route path="rated" element={<RatedMoviesPage />} />
          <Route path="favorite" element={<FavoriteMoviesPage />} />
        </Route>
      </Route>

      <Route path="/tv">
        <Route index element={<ShowsPage />} />
        <Route path=":id" element={<ShowPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="recommended" element={<RecommendedShowsPage />} />
          <Route path="watchlist" element={<ShowsWatchlistPage />} />
          <Route path="rated" element={<RatedShowsPage />} />
          <Route path="favorite" element={<FavoriteShowsPage />} />
        </Route>
      </Route>

      <Route path="/person">
        <Route path=":id" element={<PersonPage />} />
      </Route>

      <Route path="/session" element={<SessionPage />} />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
