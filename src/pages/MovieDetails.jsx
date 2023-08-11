import GoBackButton from "components/GoBackButton/GoBackButton";
import { getMoviesById } from "fetchAPI/FetchApi";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom"

const MovieDetails = () => {
  const [movie, setMovies] = useState(null)
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = location.state?.from ?? '/'

  useEffect(() => {
    getMoviesById(movieId)
      .then(data =>
        setMovies(data))
      .catch(error => console.log(error))
  }, [movieId]);



  if (!movieId) {
    return
  }

  return (
    <>
      <GoBackButton backLinkLocationRef={ backLinkLocationRef } />
     {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          {movie.poster_path && (
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          )}
        </div>
      )}</>
  );
}
export default MovieDetails
