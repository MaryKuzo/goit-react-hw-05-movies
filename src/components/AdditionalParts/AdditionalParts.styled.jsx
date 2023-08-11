import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

export const AdditionalPartsContainer = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
  margin: 20px 0;
  padding-left: 20px;
`;

export const AdditionalPart = styled.li`
  margin: 0 10px;
`;

export const AdditionalLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 24px;
  transition: color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}


`;
export const Icon = styled(BsFillArrowRightCircleFill)`
  margin-left: 5px;
  font-size: 20px;
    &:hover {
    color: #D43369;
  }
`;
export const AdditionalSpan = styled.div`
&:hover {
    color: #D43369;
  }`
