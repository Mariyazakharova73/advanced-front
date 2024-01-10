import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { ReactComponent as BrushIcon } from 'shared/assets/icons/brush.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import s from './ThemeSwitcher.module.css';

export interface ThemeSwitcherProps {
	className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();

	return (
		<Button
			className={cn(s.ThemeSwitcher, className)}
			theme={ThemeButton.CLEAR}
			onClick={toggleTheme}
		>
			<BrushIcon />
		</Button>
	);
};

export default ThemeSwitcher;
