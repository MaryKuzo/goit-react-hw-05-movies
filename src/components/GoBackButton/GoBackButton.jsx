import React from 'react';
import { GoBackButtonContainer, StyledLink, Icon } from './GoBackButton.styled';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const GoBackButton = ({ backLinkLocationRef }) => {
  return (
    <GoBackButtonContainer>
      <StyledLink to={backLinkLocationRef}>
        <Icon icon={faArrowLeft} />
        Go back
      </StyledLink>
    </GoBackButtonContainer>
  );
};


export default GoBackButton;
