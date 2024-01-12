import cn from 'classnames';
import s from './PageLoader.module.css';
import Loader from 'shared/ui/Loader/Loader';

export interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={cn(s.PageLoader, className)}>
      <Loader />
    </div>
  );
};

export default PageLoader;
