import cn from 'classnames';
import { PropsWithChildren } from 'react';
import s from './Flex.module.css';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '4' | '8' | '16' | '32';

const justifyClasses: Record<FlexJustify, string> = {
  start: s.justifyStart,
  center: s.justifyCenter,
  end: s.justifyEnd,
  between: s.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
  start: s.alignStart,
  center: s.alignCenter,
  end: s.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
  row: s.directionRow,
  column: s.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
  4: s.gap4,
  8: s.gap8,
  16: s.gap16,
  32: s.gap32,
};

export interface FlexProps {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

const Flex = (props: PropsWithChildren<FlexProps>) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    gap,
    max,
  } = props;
  return (
    <div
      className={cn(
        s.Flex,
        className,
        alignClasses[align],
        justifyClasses[justify],
        directionClasses[direction],
        gap && gapClasses[gap],
        { [s.max]: max },
      )}
    >
      {children}
    </div>
  );
};

export default Flex;
