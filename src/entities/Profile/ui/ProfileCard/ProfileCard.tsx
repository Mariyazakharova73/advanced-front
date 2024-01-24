import cn from 'classnames';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile, formFields } from '../../model/types/profile';
import s from './ProfileCard.module.css';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeInput: (value: string, name?: string) => void;
  readonly: boolean;
  onChangeCurrency: (currency: Currency) => void;
  onChangeCountry: (country: Country) => void;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profilePage');
  const {
    className,
    data,
    isLoading,
    error,
    onChangeInput,
    readonly,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  if (isLoading) {
    return (
      <div className={cn(s.ProfileCard, className, s.loading)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={cn(s.ProfileCard, className, s.error)}>
        <Text
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
          title={t('profile-error')}
          text={t('update-page')}
        />
      </div>
    );
  }

  return (
    <div className={cn(s.ProfileCard, className)}>
      {data?.avatar && (
        <div className={s.avatarWrapper}>
          <Avatar src={data?.avatar} />
        </div>
      )}
      <div className={s.inputWrapper}>
        {formFields.map((item: string) => {
          return (
            <Input
              className={cn(s.input, className)}
              key={item}
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore
              value={data ? data[item] : ''}
              placeholder={t(item)}
              onChange={onChangeInput}
              readonly={readonly}
              name={item}
            />
          );
        })}
        <CurrencySelect
          readonly={readonly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          readonly={readonly}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
