import cn from 'classnames';
import { memo, useMemo, type ChangeEvent, type FC } from 'react';
import s from './Select.module.css';

interface SelectOption {
  value: string;
  content: string;
}

export interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
}

const Select: FC<SelectProps> = ({
  className,
  label,
  options,
  onChange,
  value,
  readonly,
}) => {
  const optionList = useMemo(() => {
    return options?.map(item => (
      <option className={s.option} value={item.value} key={item.value}>
        {item.content}
      </option>
    ));
  }, [options]);

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
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

export default memo(Select);
