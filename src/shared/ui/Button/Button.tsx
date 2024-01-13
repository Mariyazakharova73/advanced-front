import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.css';

export enum ThemeButton {
  CLEAR = 'clear',
  ICON = 'icon',
  OUTLINE = 'outline',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = props => {
  const { className, children, theme = '', ...otherProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button className={cn(s.Button, className, s[theme])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
