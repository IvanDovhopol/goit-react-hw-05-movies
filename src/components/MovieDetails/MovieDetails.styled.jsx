import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 30px;
  gap: 4px;
  padding: 10px 20px;
  margin: 15px 25px;
  color: black;
  text-decoration: dashed;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: 5px 5px 5px black;

  :hover {
    color: orangered;
  }
`;

export const Info = styled.div`
  padding: 60px;
`;
