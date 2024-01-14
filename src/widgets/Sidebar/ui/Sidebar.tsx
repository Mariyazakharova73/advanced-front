import cn from 'classnames';
import { RoutePath } from 'config/routeConfig/routeConfig';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as AboutIcon } from 'shared/assets/icons/about.svg';
import { ReactComponent as ArrowLeft } from 'shared/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'shared/assets/icons/arrow-right.svg';
import { ReactComponent as HomeIcon } from 'shared/assets/icons/home.svg';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import LanguageSwitcher from 'widgets/LanguageSwitcher/ui/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.css';

export interface SidebarProps {
  className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
  const { t } = useTranslation();
  const menu = [
    { icon: HomeIcon, route: RoutePath.main, text: t('main') },
    { icon: AboutIcon, route: RoutePath.about, text: t('about') },
  ];
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const { className } = props;

  const onToggle = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <div className={cn(s.Sidebar, className, { [s.collapsed]: collapsed })}>
      <div className={s.menLinks}>
        {menu.map(item => {
          return (
            <div className={s.linkItem} key={item.route}>
              <item.icon className={s.icon} />
              {collapsed ? null : (
                <AppLink
                  className={s.link}
                  theme={AppLinkTheme.SECONDARY}
                  to={item.route}
                >
                  {item.text}
                </AppLink>
              )}
            </div>
          );
        })}
      </div>
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
