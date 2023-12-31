import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";


const Home = lazy(() => import('../pages/Home'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails'))
const MoviesSearch = lazy(() => import('../pages/MoviesSearch/MoviesSearch'));
const PageNotFound = lazy(()=> import('../pages/PageNotFound/PageNotFound'))
const Cast = lazy(() => import('../pages/Cast/Cast'))
const Reviews = lazy(()=> import('../pages/Reviews/Reviews'))

export const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='movies' element={<MoviesSearch />} />
          <Route path='movies/:movieId' element={<MovieDetails />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<PageNotFound />}></Route>
        </Route>
      </Routes>
     </>
  );
};
