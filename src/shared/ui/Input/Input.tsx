import cn from 'classnames';
import { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react';
import s from './Input.module.css';

// value и onChange конфликтуют
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

export interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
}

const Input: FC<InputProps> = props => {
  const { className, value, onChange, type = 'text', placeholder, ...otherProps } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };
  return (
    <div className={cn(s.InputWrapper, className)}>
      {placeholder && <div className={s.placeholder}>{placeholder}</div>}
      <input
        className={s.input}
        type={type}
        value={value || ''}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  );
};

export default memo(Input);
