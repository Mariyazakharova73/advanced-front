import cn from 'classnames';
import { Country, CountrySelect } from 'entities/Country';
import { Currency, CurrencySelect } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import Avatar from 'shared/ui/Avatar/Avatar';
import Card from 'shared/ui/Card/Card';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
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
      <Card className={s.wrapper}>
        <GridStack justify="center" className={cn(s.ProfileCard, className, s.loading)}>
          <Loader />
        </GridStack>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className={s.wrapper}>
        <GridStack justify="center" className={cn(s.ProfileCard, className, s.error)}>
          <Text
            theme={TextTheme.ERROR}
            align={TextAlign.CENTER}
            title={t('profile-error')}
            text={t('update-page')}
          />
        </GridStack>
      </Card>
    );
  }

  return (
    <Card className={s.wrapper}>
      <div className={cn(s.ProfileCard, className)}>
        {data?.avatar && (
          <GridStack justify="center">
            <Avatar src={data?.avatar} />
          </GridStack>
        )}
        <GridStack direction="row" gap="8" justify="stretch">
          {formFields.map((item: string) => {
            return (
              <Input
                className={cn(s.input, className)}
                key={item}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                value={data ? data[item] : ''}
                label={t(item)}
                onChange={onChangeInput}
                readonly={readonly}
                name={item}
              />
            );
          })}
          <GridStack direction="row" gap="8">
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
          </GridStack>
        </GridStack>
      </div>
    </Card>
  );
};

export default ProfileCard;
