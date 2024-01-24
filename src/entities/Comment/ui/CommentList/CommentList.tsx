import cn from 'classnames';
import { memo, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { type Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import s from './CommentList.module.css';

export interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

const CommentList: FC<CommentListProps> = ({ className, isLoading, comments }) => {
  const { t } = useTranslation('articlesPage');

  if (isLoading) {
    return (
      <div className={cn(s.CommentList, className)}>
        <CommentCard className={s.comment} isLoading={true} />
        <CommentCard className={s.comment} isLoading={true} />
        <CommentCard className={s.comment} isLoading={true} />
      </div>
    );
  }

  return (
    <div className={cn(s.CommentList, className)}>
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard
            className={s.comment}
            key={comment.id}
            comment={comment}
         
          />
        ))
      ) : (
        <Text text={t('no-comments')} />
      )}
    </div>
  );
};

export default memo(CommentList);
