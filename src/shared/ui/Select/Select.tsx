import cn from 'classnames';
import { memo, useMemo, type ChangeEvent } from 'react';
import s from './Select.module.css';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
}

export interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
}

const Select = <T extends string>(props: SelectProps<T>) => {
  const { className, label, options, onChange, value, readonly } = props;

  const optionList = useMemo(() => {
    return options?.map(item => (
      <option className={s.option} value={item.value} key={item.value}>
        {item.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value as T);
    }
  };

  return (
    <div className={cn(s.Wrapper, className)}>
      {label && <span className={s.label}>{label}</span>}
      <select
        disabled={readonly}
        className={s.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
};

export default Select;
