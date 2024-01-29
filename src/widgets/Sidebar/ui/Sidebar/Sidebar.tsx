import cn from 'classnames';
import { FC, memo, useState } from 'react';

import { ReactComponent as ArrowLeft } from 'shared/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'shared/assets/icons/arrow-right.svg';

import { useSelector } from 'react-redux';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import SidebarItem from '../SidebarItem/SidebarItem';
import s from './Sidebar.module.css';

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <menu className={cn(s.Sidebar, className, { [s.collapsed]: collapsed })}>
      <div className={s.menLinks}>
        {sidebarItemsList.map(item => {
          return <SidebarItem key={item.path} item={item} collapsed={collapsed} />;
        })}
      </div>
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
    </menu>
  );
};

export default memo(Sidebar);
