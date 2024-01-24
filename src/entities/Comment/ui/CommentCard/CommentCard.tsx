import cn from 'classnames';
import { memo, type FC } from 'react';
import IconSomeUser from 'shared/assets/tests/avatar.png';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink/AppLink';
import Avatar from 'shared/ui/Avatar/Avatar';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Text from 'shared/ui/Text/Text';
import { type Comment } from '../../model/types/comment';
import s from './CommentCard.module.css';

export interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

const CommentCard: FC<CommentCardProps> = ({ className, comment, isLoading }) => {
  if (isLoading) {
    return (
      <div className={cn(s.CommentCard, className, s.loading)}>
        <div className={s.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton className={s.username} width={100} height={16} />
        </div>
        <Skeleton className={s.text} width={'100%'} height={50} />
      </div>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <div className={cn(s.CommentCard, className)}>
      <AppLink className={s.header} to={`${RoutePath.profile}${comment.user.id}`}>
        <Avatar size={30} src={comment?.user?.avatar || IconSomeUser} />
        <Text className={s.username} title={comment.user.username} />
      </AppLink>
      <Text className={s.text} text={comment.text} />
    </div>
  );
};

export default memo(CommentCard);
