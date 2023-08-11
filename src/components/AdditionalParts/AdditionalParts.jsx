
import {
  AdditionalPartsContainer,
  AdditionalPart,
  AdditionalLink,
  Icon,
  AdditionalSpan
} from './AdditionalParts.styled';

const AdditionalItems = [
  { href: 'cast', text: 'Cast' },
  { href: 'reviews', text: 'Reviews'}
];

const AdditionalParts = () => {
  return (
        <AdditionalPartsContainer>
      {AdditionalItems.map(({ href, text }) => (
        <AdditionalPart key={href}>
          <AdditionalLink to={href}>
            <AdditionalSpan>{text} <Icon /></AdditionalSpan>

          </AdditionalLink>
        </AdditionalPart>
      ))}
    </AdditionalPartsContainer>

  );
};

export default AdditionalParts;
