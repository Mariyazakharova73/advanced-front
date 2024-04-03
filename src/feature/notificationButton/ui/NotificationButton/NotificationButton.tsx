import cn from 'classnames';
import { NotificationList } from 'entities/Notification';
import { useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { ReactComponent as NotificationIcon } from 'shared/assets/icons/notification.svg';
import Drawer from 'shared/ui/Drawer/Drawer';
import { Popover } from 'shared/ui/Popups';
import s from './NotificationButton.module.css';

export interface NotificationButtonProps {
  className?: string;
}

const NotificationButton = ({ className }: NotificationButtonProps) => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpenDrawer(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpenDrawer(false);
  }, []);

  const trigger = <NotificationIcon className={s.icon} onClick={onOpenDrawer} />;

  return (
    <>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>

      <BrowserView>
        <Popover
          className={cn(s.NotificationButton, className)}
          direction="bottomLeft"
          trigger={trigger}
        >
          <NotificationList />
        </Popover>
      </BrowserView>
    </>
  );
};

export default NotificationButton;
