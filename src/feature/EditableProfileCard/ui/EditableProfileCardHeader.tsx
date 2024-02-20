import cn from 'classnames';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import Text from 'shared/ui/Text/Text';
import { getProfileData } from '../model/selectors/getProfileData';
import { getProfileReadOnly } from '../model/selectors/getProfileReadOnly';
import { updateProfileData } from '../model/services/updateProfiledata';
import { profileActions } from '../model/slice/profileSlice';
import s from './EditableProfileCardHeader.module.css';

export interface EditableProfileCardHeaderProps {
  className?: string;
}

const EditableProfileCardHeader: FC<EditableProfileCardHeaderProps> = props => {
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
    <GridStack justify="between" className={cn(className)}>
      <Text title={t('profileTitle')} />
      {canEdit &&
        (readonly ? (
          <Button onClick={onEdit} className={s.button}>
            {t('edit')}
          </Button>
        ) : (
          <GridStack justify="end" gap="8">
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
          </GridStack>
        ))}
    </GridStack>
  );
};

export default EditableProfileCardHeader;
