import { routeConfig } from 'config/routeConfig/routeConfig';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(r => {
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

export default AppRouter;
