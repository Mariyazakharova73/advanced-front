import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';
import s from './Card.module.css';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined',
}

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  theme?: CardTheme;
}

const Card = (props: PropsWithChildren<CardProps>) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
  return (
    <div className={cn(s.Card, className, s[theme])} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
