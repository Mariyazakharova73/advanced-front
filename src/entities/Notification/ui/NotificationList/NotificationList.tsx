import cn from 'classnames';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import { useNotifications } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';
import s from './NotificationList.module.css';

export interface NotificationProps {
  className?: string;
}

const NotificationList = ({ className }: NotificationProps) => {
  const { data, isLoading } = useNotifications(null, { pollingInterval: 10000 });

  if (isLoading) {
    return (
      <GridStack
        gap="16"
        direction="row"
        max
        className={cn(s.NotificationList, className)}
      >
        <Skeleton width={300} border="8px" height={80} />
        <Skeleton width={300} border="8px" height={80} />
        <Skeleton width={300} border="8px" height={80} />
      </GridStack>
    );
  }

  return (
    <GridStack gap="16" direction="row" max className={cn(s.NotificationList, className)}>
      {data?.map(item => {
        return <NotificationItem key={item.id} item={item} />;
      })}
    </GridStack>
  );
};

export default NotificationList;
