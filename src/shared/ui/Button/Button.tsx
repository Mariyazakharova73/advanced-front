import cn from 'classnames';
import { ButtonHTMLAttributes, FC } from 'react';
import s from './Button.module.css';

export enum ButtonTheme {
  PRIMARY = 'primary',
  // PRIMARY_LIGHT = 'primaryLight',
  OUTLINE = 'outline',
  OUTLINE_LIGHT = 'outlineLight',
  CLEAR = 'clear',
  CLEAR_LIGHT = 'clearLight',
  ICON = 'icon',
}

export enum ButtonSizes {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSizes;
}

const Button: FC<ButtonProps> = props => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSizes.M,
    ...otherProps
  } = props;

  return (
    <button className={cn(s.Button, className, s[theme], s[size])} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
