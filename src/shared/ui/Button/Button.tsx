import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.css';

export enum ThemeButton {
	CLEAR = 'clear',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ThemeButton;
}

const Button: FC<ButtonProps> = props => {
	const {
		className,
		children,
		theme = ThemeButton.CLEAR,
		...otherProps
	} = props;
	return (
		<button className={cn(s.Button, className, s[theme])} {...otherProps}>
			{children}
		</button>
	);
};

export default Button;
