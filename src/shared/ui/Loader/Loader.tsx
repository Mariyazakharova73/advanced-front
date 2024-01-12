import cn from 'classnames';
import { FC } from 'react';
import s from './Loader.module.css';

export interface LoaderProps {
  className?: string;
}

const Loader: FC<LoaderProps> = props => {
  const { className } = props;
  return (
    <div className={cn(s.Loader, className, s.spinner)}>
      <div className={s.ldio}>
        <div className={s.element} />
      </div>
    </div>
  );
};

export default Loader;
