import cn from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import GridStack from '../Stack/GridStack/GridStack';
import s from './Input.module.css';

// value и onChange конфликтуют
type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readonly'
>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string, name?: string) => void;
  placeholder?: string;
  label?: string;
  autoFocus?: boolean;
  readonly?: boolean;
  name?: string;
}

const Input: FC<InputProps> = props => {
  const {
    className,
    value,
    onChange,
    readonly,
    type = 'text',
    placeholder,
    label,
    name,
    ...otherProps
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value, e.target?.name);
  };

  const mods = {
    [s.readonly]: readonly,
  };

  return (
    <GridStack justify="stretch" gap="8" direction="row" className={cn(className, mods)}>
      {label && <div className={s.label}>{label}</div>}
      <input
        placeholder={placeholder}
        readOnly={readonly}
        className={s.input}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </GridStack>
  );
};

export default memo(Input);
