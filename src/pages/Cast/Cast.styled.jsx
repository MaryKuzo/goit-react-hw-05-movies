import styled from '@emotion/styled';

export const CastContainer = styled.div`
  margin-top: 20px;
`;

export const ActorList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const ActorCard = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
`;

export const ActorImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
`;

export const ActorName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

export const Character = styled.p`
  font-size: 16px;
  color: #555;
`;
export const CharacterSpan = styled.span`
  color:#D43369;
`
export const DefaultImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  opacity: 0.7;

`;

export const NoCharacterSpan = styled.span`
  color: #D43369;
  font-size: 24px;
  padding-left: 20px;
`
