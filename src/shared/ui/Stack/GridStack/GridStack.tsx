import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';
import s from './GridStack.module.css';

export type GridStackJustify = 'start' | 'center' | 'end' | 'between' | 'stretch';
export type GridStackAlign = 'start' | 'center' | 'end';
export type GridStackDirection = 'row' | 'column';
export type GridStackGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<GridStackJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
  stretch: s.justifyStretch,
};

const alignClasses: Record<GridStackAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<GridStackDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};

const gapClasses: Record<GridStackGap, string> = {
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  32: s.gap32,
};

export interface GridStackProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  justify?: GridStackJustify;
  align?: GridStackAlign;
  direction?: GridStackDirection;
  gap?: GridStackGap;
  max?: boolean;
}

const GridStack = (props: PropsWithChildren<GridStackProps>) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'column',
    gap,
    max,
    ...otherProps
  } = props;
  return (
    <div
      className={cn(
        s.GridStack,
        className,
        alignClasses[align],
        justifyClasses[justify],
        directionClasses[direction],
        gap && gapClasses[gap],
        { [s.max]: max },
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default GridStack;
