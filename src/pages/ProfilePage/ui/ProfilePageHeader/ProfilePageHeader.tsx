import cn from 'classnames';
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
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
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const canEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false));
  }, [dispatch]);

  const onCancel = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={cn(s.ProfilePageHeader, className)}>
      <Text title={t('profileTitle')} />
      {canEdit &&
        (readonly ? (
          <Button onClick={onEdit} className={s.button}>
            {t('edit')}
          </Button>
        ) : (
          <div className={s.buttonsWrapper}>
            <Button
              theme={ButtonTheme.PRIMARY_RED}
              onClick={onCancel}
              className={s.button}
            >
              {t('cancel')}
            </Button>
            <Button onClick={onSave} className={s.button}>
              {t('save')}
            </Button>
          </div>
        ))}
    </div>
  );
};

export default ProfilePageHeader;
