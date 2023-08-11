import { useEffect, useState } from 'react';
import { getTrandingMovies } from '../fetchAPI/FetchApi';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState(null)
  useEffect(() => {
    getTrandingMovies()
      .then(data => {
        setMovies(data.results)
      })
      .catch(error => console.log(error))
  }, []);

  if (!movies) {
    return
  }

  return (
    <>
      <MoviesList movies={movies} titlePage={'Trending Movies'} />
    </>
  );
};
export default Home
