import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";



const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails'))
const MoviesSearch = lazy(() => import('../pages/MoviesSearch/MoviesSearch'));

export const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<MoviesSearch/>} />
        <Route path='movies/:movieId' element={<MovieDetails />}>
          <Route path='cast' element={<div>Cast</div>} />
          <Route path='reviews' element={<div>Reviews</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
