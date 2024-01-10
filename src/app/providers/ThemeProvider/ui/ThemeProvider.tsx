import React, { useMemo, useState, type FC } from 'react';
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from '../lib/ThemeContext';

export interface ThemeProviderProps {
	children: React.ReactNode;
	initialTheme?: Theme;
}

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
	document.body.className = defaultTheme;

	const [theme, setTheme] = useState(initialTheme || defaultTheme);

	const defaultProps = useMemo(() => {
		return { theme, setTheme };
	}, [theme]);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
