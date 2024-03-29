import { Popover as HPopover } from '@headlessui/react';
import cn from 'classnames';
import { PropsWithChildren, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.css';
import s from './Popover.module.css';

export interface PopoverProps {
  className?: string;
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export function Popover(props: PropsWithChildren<PopoverProps>) {
  const { className, direction = 'bottomRight', trigger, children } = props;
  return (
    <HPopover className={cn(s.Popover, className, popupStyles.popup)}>
      <HPopover.Button className={popupStyles.trigger}>{trigger}</HPopover.Button>

      <HPopover.Panel className={cn(s.panel, mapDirectionClass[direction])}>
        {children}
      </HPopover.Panel>
    </HPopover>
  );
}
