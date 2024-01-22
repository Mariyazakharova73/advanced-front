import cn from 'classnames';
import { CSSProperties, FC, useMemo } from 'react';
import s from './Avatar.module.css';

export interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
}

const Avatar: FC<AvatarProps> = props => {
  const { className, src, size } = props;

  const styles = useMemo<CSSProperties>(() => {
    return { width: size || 100, height: size || 100 };
  }, [size]);

  return (
    <img style={styles} src={src} alt="Avatar." className={cn(s.Avatar, className)} />
  );
};

export default Avatar;
