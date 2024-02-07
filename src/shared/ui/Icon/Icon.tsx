import cn from 'classnames';
import React, { memo, type FC } from 'react';
import s from './Icon.module.css';

export interface IconProps {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Icon: FC<IconProps> = ({ className, Svg }) => {
  return <Svg className={cn(s.Icon, className)} />;
};

export default memo(Icon);
