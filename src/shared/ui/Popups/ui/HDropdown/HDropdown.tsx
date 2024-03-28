import { Menu } from '@headlessui/react';
import cn from 'classnames';
import { FC, Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import AppLink from '../../../AppLink/AppLink';
import s from './HDropdown.module.css';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.css';

export interface DropdownItem {
  disabled?: boolean;
  content?: ReactNode;
  onClick?: () => void;
  href?: string;
}

export interface HDropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const HDropdown: FC<HDropdownProps> = props => {
  const { className, items, trigger, direction = 'bottomRight' } = props;

  return (
    <Menu as="div" className={cn(className, popupStyles.popup)}>
      <Menu.Button className={s.btn}>{trigger}</Menu.Button>
      <Menu.Items className={cn(s.menu, mapDirectionClass[direction])}>
        {items?.map((item, index) => {
          const content = ({ active }: { active: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={cn(s.menuItem, { [s.active]: active })}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <Menu.Item as={AppLink} to={item.href} key={index} disabled={item.disabled}>
                {content}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {content}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
