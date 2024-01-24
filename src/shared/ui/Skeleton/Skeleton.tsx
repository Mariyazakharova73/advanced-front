import cn from 'classnames';
import { memo, type CSSProperties, type FC } from 'react';
import s from './Skeleton.module.css';

export interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string | number;
}

const Skeleton: FC<SkeletonProps> = ({ className, height, width, border }) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };
  return <div className={cn(s.Skeleton, className)} style={styles}></div>;
};

export default memo(Skeleton);
