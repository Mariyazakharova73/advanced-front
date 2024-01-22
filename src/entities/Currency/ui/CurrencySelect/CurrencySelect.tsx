import cn from 'classnames';
import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

export interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

const CurrencySelect: FC<CurrencySelectProps> = ({
  className,
  value,
  onChange,
  readonly,
}) => {
  const { t } = useTranslation('profilePage');

  // for ts value type string
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <Select
      className={cn(className)}
      label={t('currencyLabel')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      // onChange={onChange}
    />
  );
};

export default memo(CurrencySelect);
