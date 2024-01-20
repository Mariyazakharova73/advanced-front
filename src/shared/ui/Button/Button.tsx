import cn from 'classnames';
import { ButtonHTMLAttributes, PropsWithChildren, memo } from 'react';
import s from './Button.module.css';

export enum ButtonTheme {
  PRIMARY = 'primary',
  PRIMARY_RED = 'primaryRed',
  PRIMARY_LIGHT = 'primaryLight',
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
  disabled?: boolean;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const {
    className,
    children,
    theme = ButtonTheme.PRIMARY,
    size = ButtonSizes.M,
    disabled,
    ...otherProps
  } = props;

  const mods = { [s.disabled]: disabled };

  return (
    <button
      className={cn(s.Button, className, s[theme], s[size], mods)}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

// обернули в memo, т.к в качестве children - строка
export default memo(Button);
