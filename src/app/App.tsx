import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import cn from 'classnames';
import { getUserInited, userActions } from 'entities/User';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

function App() {
  const { theme } = useTheme();

  const inited = useSelector(getUserInited);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', theme)}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {/* отрисовываем роутер только когда данные профиля получены */}
          {inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
