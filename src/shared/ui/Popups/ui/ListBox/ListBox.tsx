import { Listbox as HListBox } from '@headlessui/react';
import cn from 'classnames';
import { Fragment, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import Button, { ButtonTheme } from '../../../Button/Button';
import GridStack from '../../../Stack/GridStack/GridStack';
import { mapDirectionClass } from '../../styles/consts';
import popupStyles from '../../styles/popup.module.css';
import s from './ListBox.module.css';

const { Options, Option } = HListBox;

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

export interface ListBoxProps {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottomLeft',
    label,
  } = props;

  return (
    <GridStack gap="8">
      {label && <span className={s.label}>{label}</span>}
      <HListBox
        className={cn(popupStyles.popup)}
        as={'div'}
        onChange={onChange}
        value={value}
        disabled={readonly}
      >
        <HListBox.Button className={cn(s.trigger, className)} as={'div'}>
          <Button
            className={cn({
              [popupStyles.disabled]: readonly,
            })}
            theme={ButtonTheme.OUTLINE}
          >
            {value || defaultValue}
          </Button>
        </HListBox.Button>
        <Options className={cn(s.optionsList, mapDirectionClass[direction])}>
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
                    [popupStyles.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </Option>
          ))}
        </Options>
      </HListBox>
    </GridStack>
  );
}
