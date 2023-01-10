import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoviesList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  grid-gap: 12px;
  margin-top: 10px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 14px;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  margin: 15px 25px;
  color: black;
  text-decoration: dashed;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${p => p.theme.colors.muted};
  border-radius: ${p => p.theme.radii.medium};
  box-shadow: 5px 5px 5px black;
  cursor: zoom-in;

  &:hover {
    color: ${p => p.theme.colors.accent};
  }

  &.active {
    color: ${p => p.theme.colors.accent};
  }
`;

export const Item = styled.li`
  background: #fff;
  border-radius: 25px;
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.04);
    cursor: zoom-in;
  }
`;