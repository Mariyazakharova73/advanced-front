import cn from 'classnames';
import { NotificationList } from 'entities/Notification';
import { ReactComponent as NotificationIcon } from 'shared/assets/icons/notification.svg';
import { Popover } from 'shared/ui/Popups';
import s from './NotificationButton.module.css';

export interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
  return (
    <Popover
      className={cn(s.NotificationButton, className)}
      direction="bottomLeft"
      trigger={<NotificationIcon className={s.icon} />}
    >
      <NotificationList />
    </Popover>
  );
};

export default NotificationButton;
