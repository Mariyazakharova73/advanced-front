import { Listbox } from '@headlessui/react';
import cn from 'classnames';
import { Fragment, ReactNode } from 'react';
import Button, { ButtonTheme } from '../Button/Button';
import GridStack from '../Stack/GridStack/GridStack';
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
  direction?: DropdownDirection;
  label?: string;
}

export function HListBox(props: HListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom',
    label,
  } = props;

  return (
    <GridStack gap="8">
      {label && <span className={s.label}>{label}</span>}
      <Listbox
        className={cn(s.HListBox)}
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
        <Options className={cn(s.optionsList, { [s.ListTop]: direction === 'top' })}>
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
    </GridStack>
  );
}
