import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </header>

      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
