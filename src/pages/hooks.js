import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const routes = [{ path: '/' }, { path: '/about' }, { path: '/testpage' }];

export const useDir = () => {
  const {
    pathname,
    state: { from },
  } = useLocation();

  const pathname_i = routes.findIndex((el) => el.path === pathname);
  const from_i = routes.findIndex((el) => el.path === from);

  const diff = pathname_i - from_i;

  /* console.log({
    diff,
    pathname,
    pathname_i,
    from: from.current,
    from_i,
  }); */

  let dir = null;
  if (diff < 0) dir = 'left';
  if (diff > 0) dir = 'right';

  return { dir, pathname };
};
