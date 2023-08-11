import GoBackButton from "components/GoBackButton/GoBackButton";
import MoviesInfo from "components/MoviesInfo/MoviesInfo";
import { getMoviesById } from "services/FetchApi";
import { useEffect, useState, Suspense, lazy } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom"
import Loading from "components/Loading/Loading";



const AdditionalParts = lazy(()=> import('../components/AdditionalParts/AdditionalParts'))

const MovieDetails = () => {
  const [movie, setMovies] = useState(null)
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkLocationRef = location.state?.from ?? '/'

useEffect(() => {
  getMoviesById(movieId)
    .then(data => {
      setMovies(data);
    })
    .catch(error => console.log(error));
}, [movieId]);



  if (!movieId) {
    return
  }

  return (
    <>
      <GoBackButton backLinkLocationRef={backLinkLocationRef} />
      {movie && <MoviesInfo movie={movie} />}
      <AdditionalParts location={backLinkLocationRef}/>
      <Suspense fallback={<Loading/>}>
        <Outlet/>
      </Suspense>
    </>
  );
}
export default MovieDetails
