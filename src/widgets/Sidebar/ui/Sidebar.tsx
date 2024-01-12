import cn from 'classnames';
import { FC, useState } from 'react';
import { ReactComponent as ArrowLeft } from 'shared/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'shared/assets/icons/arrow-right.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
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
  return (
    <div className={cn(s.Sidebar, className, { [s.collapsed]: collapsed })}>
      <div>fff</div>
      <div className={s.buttons}>
        <div className={collapsed ? s.switchersCol : s.switchers}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
        <div className={s.wrapper}>
          <Button theme={ThemeButton.ICON} onClick={onToggle}>
            {collapsed ? <ArrowRight /> : <ArrowLeft />}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
