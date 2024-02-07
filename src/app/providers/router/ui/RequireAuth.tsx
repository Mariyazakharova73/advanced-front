import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function RequireAuth({ children }: { children: any }) {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }
  return children;
}
