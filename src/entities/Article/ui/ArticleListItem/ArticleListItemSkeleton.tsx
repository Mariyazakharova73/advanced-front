import cn from 'classnames';
import { ArticleView } from '../../../Article/model/types/article';
import Card from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import s from './ArticleListItem.module.css';

interface ArticleListItemSkeletonProps {
  view: ArticleView;
  className?: string;
}

export const ArticleListItemSkeleton = ({
  view,
  className,
}: ArticleListItemSkeletonProps) => {
  if (view === ArticleView.BIG) {
    return (
      <div className={cn(s.ArticleListItem, className, s[view])}>
        <Card>
          <div className={s.header}>
            <Skeleton width={30} height={30} border="50%" />
            <Skeleton width={150} height={16} className={s.username} />
            <Skeleton width={150} height={16} className={s.date} />
          </div>
          <Skeleton width={250} height={24} className={s.skBigTitle} />
          <Skeleton height={200} className={s.bigImg} />
          <div className={s.footer}>
            <Skeleton width={200} height={36} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(s.ArticleListItem, className, s[view])}>
      <Card>
        <div className={s.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={s.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={s.skSmallTitle} />
      </Card>
    </div>
  );
};
