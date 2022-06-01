import 'normalize.css';
import './styles/index.scss';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// const Slider = lazy(() => import('./components/Slider'));

/* 
{ path: '/', Component: lazy(() => import('./pages/Home')) },
    { path: '/about', Component: lazy(() => import('./pages/About')) },

*/

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
];

const App = () => {
  const location = useLocation();

  return (
    <>
      <header className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
      </header>
      <TransitionGroup component={null}>
        <CSSTransition key={location.pathname} classNames='section' timeout={500}>
          <Routes location={location}>
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path} element={<Component />} />
            ))}
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default App;
