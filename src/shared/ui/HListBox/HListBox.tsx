import { Listbox } from '@headlessui/react';
import cn from 'classnames';
import { Fragment, ReactNode } from 'react';
import Button, { ButtonTheme } from '../Button/Button';
import s from './HListBox.module.css';

const { Options, Option } = Listbox;

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropdownDirection = 'top' | 'bottom';

export interface HListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
}

export function HListBox(props: HListBoxProps) {
  const { items, className, value, defaultValue, onChange, readonly } = props;

  return (
    <Listbox
      className={cn(s.HListBox, {
        [s.disabled]: readonly,
      })}
      as={'div'}
      onChange={onChange}
      value={value}
      disabled={readonly}
    >
      <Listbox.Button className={cn(s.trigger, className)} as={'div'}>
        <Button
          className={cn({
            [s.disabled]: readonly,
          })}
          theme={ButtonTheme.OUTLINE}
        >
          {value || defaultValue}
        </Button>
      </Listbox.Button>
      <Options className={s.optionsList}>
        {items?.map(item => (
          <Option
            key={item.value}
            value={item.value}
            disabled={item.disabled}
            as={Fragment}
          >
            {({ active, selected }) => (
              <li
                className={cn(s.optionItem, {
                  [s.selected]: selected,
                  [s.disabled]: item.disabled,
                })}
              >
                {item.content}
              </li>
            )}
          </Option>
        ))}
      </Options>
    </Listbox>
  );
}
