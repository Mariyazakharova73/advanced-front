import cn from 'classnames';
import { Link } from 'react-router-dom';
import Card, { CardTheme } from 'shared/ui/Card/Card';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { Notification } from '../../model/types/notifications';
import s from './NotificationItem.module.css';

export interface NotificationItemProps {
  className?: string;
  item: Notification;
}

const NotificationItem = ({ className, item }: NotificationItemProps) => {

  const content = (
    <Card theme={CardTheme.OUTLINED} className={cn(s.NotificationItem, className)}>
      <Text title={item.title} text={item.description} size={TextSize.S}/>
    </Card>
  );

  if (item.href) {
    return (
      <Link className={s.link} to={item.href} target="_blank">
        {content}
      </Link>
    );
  }

  return content;
};

export default NotificationItem;
