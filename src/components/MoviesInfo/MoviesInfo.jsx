import {
  MovieDetailsContainer,
  MovieInform,
  MovieImage,
  MovieTitle,
  UserScore,
  Overview,
  Genres,
  GenresSpan,
  DefaultImageCast
} from './MoviesInfo.styled'
import PropTypes from 'prop-types';
import DefaultCastImage from './default_img.png';

const MoviesInfo = ({ movie }) => {
  const {
    title,
    name,
    poster_path,
    overview,
    genres,
    release_date,
    first_air_date,
    vote_average
  } = movie;

  const userScore = Math.round(vote_average * 10);


  return (
    <>
      <MovieDetailsContainer>
        {poster_path ? (
          <MovieImage
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt={title || name} />)
          :
          <DefaultImageCast
            src={DefaultCastImage}
            alt="No image available" />}

        <MovieInform>
          <MovieTitle>
            {title || name} ({(first_air_date || release_date).slice(0, 4)})
          </MovieTitle>
          <UserScore>User Score: {userScore}%</UserScore>
          <Overview>{overview}</Overview>
          <Genres>Genres:&nbsp;
            <GenresSpan>{genres.map(({ name }) => name).join(', ')}
            </GenresSpan>
          </Genres>
        </MovieInform>
      </MovieDetailsContainer>
    </>
  )

}

MoviesInfo.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ),
    release_date: PropTypes.string,
    first_air_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired
  }).isRequired,
};
export default MoviesInfo

