import { NavLink, Outlet } from 'react-router-dom';
// import { Suspense } from 'react';
import css from './Layout.module.css';
import { Container } from 'components/Container/Container';

export const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <Container>
          <nav>
            <NavLink to="/" end className={css.navLink}>
              Home
            </NavLink>
            <NavLink to="/movies" end className={css.navLink}>
              Movies
            </NavLink>
          </nav>
        </Container>
      </header>

      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Outlet />
      {/* </Suspense> */}
    </>
  );
};
