import cn from 'classnames';
import { getProfileReadOnly, profileActions } from 'entities/Profile';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import Text from 'shared/ui/Text/Text';
import s from './ProfilePageHeader.module.css';

export interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
  const { t } = useTranslation('profilePage');
  const { className } = props;
  const readonly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.setReadOnly(true));
  }, [dispatch]);

  return (
    <div className={cn(s.ProfilePageHeader, className)}>
      <Text title={t('profileTitle')} />
      {readonly ? (
        <Button onClick={onEdit} className={s.button}>
          {t('edit')}
        </Button>
      ) : (
        <Button onClick={onCancel} className={s.button}>
          {t('cancel')}
        </Button>
      )}
    </div>
  );
};

export default ProfilePageHeader;
