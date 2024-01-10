import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import cn from 'classnames';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';

const Component = () => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language==='ru'? 'en': 'ru');
	};

	return (
		<div>
			<button onClick={toggle}>кнопка</button>
			{t('title')}
		</div>
	);
};

function App() {
	const { theme } = useTheme();

	return (
		<div className={cn('app', theme)}>
			<Suspense fallback=''>
				<Navbar />
				<Component />
				<div className='content-page'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
}

export default App;
