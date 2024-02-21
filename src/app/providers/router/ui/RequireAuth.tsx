import { getUserRoles } from 'entities/User';
import { getUserAuthData } from 'entities/User/model/selectors/getUserAuthData';
import { UserRole } from 'entities/User/model/types/user';
import { PropsWithChildren, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface RequireAuthProps {
  roles?: UserRole[];
}

export function RequireAuth(props: PropsWithChildren<RequireAuthProps>) {
  const { children, roles } = props;
  const auth = useSelector(getUserAuthData);
  const userRoles = useSelector(getUserRoles);
  const location = useLocation();

  const hasRequireRoles = useMemo(() => {
    // если массив ролей пустой, то все права доступны
    if (!roles) {
      return true;
    }

    return roles.some(requiredRole => {
      const hasRole = userRoles?.includes(requiredRole);
      return hasRole;
    });
  }, [roles, userRoles]);

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  if (!hasRequireRoles) {
    return <Navigate to={RoutePath.forbidden} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
