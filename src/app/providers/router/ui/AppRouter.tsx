import { getUserAuthData } from 'entities/User';
import { Suspense, memo, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      return !(route.authOnly && !isAuth);
    });
  }, [isAuth]);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {routes.map(r => {
          return (
            <Route
              key={r.path}
              path={r.path}
              element={<div className="page-wrapper">{r.element}</div>}
            />
          );
        })}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
