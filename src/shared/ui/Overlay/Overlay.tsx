import cn from 'classnames';
import s from './Overlay.module.css';
import { memo } from 'react';

export interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay = (props: OverlayProps) => {
  const { className, onClick } = props;

  return (
    <div role="presentation" className={cn(s.Overlay, className)} onClick={onClick}></div>
  );
};

export default memo(Overlay);
