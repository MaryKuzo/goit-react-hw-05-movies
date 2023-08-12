import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/FetchApi';
import PropTypes from 'prop-types';
import {
  CastContainer,
  ActorList,
  ActorCard,
  ActorImage,
  ActorName,
  Character,
  CharacterSpan,
  DefaultImage,
  NoCharacterSpan
} from './Cast.styled';
import DefaultActorImage from './default.png';


const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId)
      .then(data => {
        setCast(data);

      })
      .catch(error => console.error(error));
  }, [movieId]);

  if (!cast) {
    return null;
  }

  return (
    <CastContainer>
      {cast.length > 0 ? (
        <ActorList>
          {cast.map(({ id, name, profile_path, character }) => (
            <ActorCard key={id}>
              {profile_path ? (
                <ActorImage
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                />
              ) : (
                <DefaultImage src={DefaultActorImage} alt="No image available" />

              )}
              <ActorName>{name}</ActorName>
              <Character>Character: <CharacterSpan>{character}</CharacterSpan></Character>
            </ActorCard>
          ))}
        </ActorList>
      ) : (
        <NoCharacterSpan>No actors here</NoCharacterSpan>
      )}
    </CastContainer>
  );
};

Cast.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  profile_path: PropTypes.string,
  character: PropTypes.string
};

export default Cast;
