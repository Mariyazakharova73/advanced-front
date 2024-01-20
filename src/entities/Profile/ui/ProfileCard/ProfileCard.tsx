import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.css';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeInput: (value: string, name?: string) => void;
  readonly: boolean;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profilePage');
  const { className, data, isLoading, error, onChangeInput, readonly } = props;

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
      <div>
        {['first', 'lastname', 'age', 'city', 'username', 'avatar'].map(
          (item: string) => {
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
          },
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
