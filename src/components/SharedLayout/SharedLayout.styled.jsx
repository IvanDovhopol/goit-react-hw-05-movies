import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  gap: 4px;
  padding: 5px 10px;
  margin: 15px 25px;
  color: black;
  text-decoration: dashed;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: 5px 5px 5px black;

  &:hover {
    color: orangered;
  }

  &.active {
    color: orangered;
  }
`;
