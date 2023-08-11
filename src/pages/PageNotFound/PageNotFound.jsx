import {NotFoundContainer, IconWrapper} from './PageNotFound.styled'
import { FaExclamationTriangle } from 'react-icons/fa';

const PageNotFound = () => {
  return (
 <NotFoundContainer>
      <IconWrapper>
        <FaExclamationTriangle />
      </IconWrapper>
      <span>Page not found</span>
    </NotFoundContainer>
  )
}
export default PageNotFound
