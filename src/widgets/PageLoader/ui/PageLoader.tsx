import cn from 'classnames';
import Loader from 'shared/ui/Loader/Loader';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import s from './PageLoader.module.css';

export interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <GridStack justify="center" className={cn(s.PageLoader, className)}>
      <Loader />
    </GridStack>
  );
};

export default PageLoader;
