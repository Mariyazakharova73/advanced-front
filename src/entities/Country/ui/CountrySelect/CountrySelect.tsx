import cn from 'classnames';
import { memo, useCallback, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'shared/ui/Select/Select';
import { Country } from '../../model/types/country';

export interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Russia, content: Country.Russia },
];

const CountrySelect: FC<CountrySelectProps> = ({
  className,
  value,
  onChange,
  readonly,
}) => {
  const { t } = useTranslation('profilePage');

  // for ts value type string
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <Select
      className={cn(className)}
      label={t('countryLabel')}
      options={options}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      // onChange={onChange}
    />
  );
};

export default memo(CountrySelect);