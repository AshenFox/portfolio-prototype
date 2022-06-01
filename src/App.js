import 'normalize.css';
import './styles/index.scss';
import { NavLink, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const lazyWithPreload = (factory) => {
  const Component = lazy(factory);
  Component.preload = factory;
  return Component;
};

const TestPage = lazyWithPreload(() => import('./pages/TestPage'));

const routes = [
  { path: '/', Component: Home },
  { path: '/about', Component: About },
  { path: '/testpage', Component: TestPage },
];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const click = async () => {
    const result = await TestPage.preload();
    navigate('/testpage');

    console.log(result);
  };

  return (
    <>
      <header className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <button onClick={click}>Test Page</button>
      </header>
      <div className='section-slider'>
        <TransitionGroup component={null}>
          <CSSTransition key={location.pathname} classNames='section' timeout={1000}>
            <Routes location={location}>
              {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path} element={<Component />} />
              ))}
              <Route path={'*'} element={<Home />} />
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};

export default App;
