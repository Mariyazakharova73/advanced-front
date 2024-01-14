import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.css';

export enum ThemeButton {
  CLEAR = 'clear',
  ICON = 'icon',
  OUTLINE = 'outline',
}

export enum ButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSizes;
}

const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    theme = '',
    square,
    size = ButtonSizes.M,
    ...otherProps
  } = props;

  const mods = { [s.square]: square };

  return (
    <button className={cn(s.Button, className, s[theme], mods, s[size])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
