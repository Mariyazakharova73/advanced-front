import { Menu } from '@headlessui/react';
import cn from 'classnames';
import { FC, Fragment } from 'react';
import s from './HDropdown.module.css';

export interface HDropdownProps {
  className?: string;
  items?:
}

const HDropdown: FC<HDropdownProps> = props => {
  const { className } = props;
  return (
    <Menu as="div" className={cn(className, HDropdown)}>
      <Menu.Button className={s.btn}>More</Menu.Button>
      <Menu.Items className={s.menu}>
        <Menu.Item as={Fragment}>
          {({ active }) => (
            <li className={cn(s.menuItem, { [s.active]: active })}>Content</li>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default HDropdown;
