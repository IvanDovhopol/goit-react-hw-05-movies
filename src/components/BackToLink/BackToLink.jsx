import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledLink } from './BackToLink.styled';

export const BackToLink = ({ to, children }) => {
  console.log(to);
  console.log(children);
  return (
    <StyledLink to={to}>
      <AiOutlineArrowLeft /> {children}
    </StyledLink>
  );
};
