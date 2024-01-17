import cn from 'classnames';
import { FC, useMemo, useState } from 'react';

import { ReactComponent as ArrowLeft } from 'shared/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'shared/assets/icons/arrow-right.svg';

import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { SidebarItemsList } from '../../model/items';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.css';

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  const itemsList = useMemo(() => {
    return SidebarItemsList.map(item => {
      return <SidebarItem key={item.path} item={item} collapsed={collapsed} />;
    });
  }, [collapsed]);

  return (
    <div className={cn(s.Sidebar, className, { [s.collapsed]: collapsed })}>
      <div className={s.menLinks}>{itemsList}</div>
      <div className={s.buttons}>
        <div className={collapsed ? s.switchersCol : s.switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <div className={s.wrapper}>
          <Button theme={ButtonTheme.CLEAR_LIGHT} onClick={onToggle}>
            {collapsed ? <ArrowRight /> : <ArrowLeft />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
