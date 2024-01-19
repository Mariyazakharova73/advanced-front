import cn from 'classnames';
import { getProfileReadOnly } from 'entities/Profile/model/selectors/getProfileReadOnly';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Input from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import Text, { TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Profile } from '../../model/types/profile';
import s from './ProfileCard.module.css';

export interface ProfileCardProps {
  className?: string;
  data?: Profile[];
  isLoading?: boolean;
  error?: string;
}

const ProfileCard = (props: ProfileCardProps) => {
  const { t } = useTranslation('profilePage');
  const { className, data, isLoading, error } = props;
  const readonly = useSelector(getProfileReadOnly);

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
        <Input
          readonly={readonly}
          className={s.input}
          value={data ? data[0].first : ''}
          placeholder={t('first')}
        />
        <Input
          readonly={readonly}
          className={s.input}
          value={data ? data[0].lastname : ''}
          placeholder={t('last')}
        />
      </div>
    </div>
  );
};

export default ProfileCard;
