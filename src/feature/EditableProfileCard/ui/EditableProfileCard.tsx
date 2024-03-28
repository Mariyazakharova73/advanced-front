import cn from 'classnames';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from 'entities/Profile';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { getProfileError } from '../model/selectors/getProfileError';
import { getProfileForm } from '../model/selectors/getProfileForm';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading';
import { getProfileReadOnly } from '../model/selectors/getProfileReadOnly';
import { getProfileValidateErrors } from '../model/selectors/getProfileValidateErrors';
import { fetchProfileData } from '../model/services/fetchProfileData';
import { profileActions, profileReducer } from '../model/slice/profileSlice';
import { ValidateProfileError } from '../model/types/profile';

export interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const EditableProfileCard = ({ className, id }: EditableProfileCardProps) => {
  const { t } = useTranslation('profilePage');
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);
  const validateErrors = useSelector(getProfileValidateErrors);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeInput = useCallback(
    (value: string, name?: string) => {
      if (name) {
        dispatch(profileActions.updateProfile({ [name]: value }));
      }
    },
    [dispatch],
  );

  const onChangeCurrency = useCallback(
    (value?: Currency) => {
      dispatch(profileActions.updateProfile({ currency: value }));
    },
    [dispatch],
  );

  const onChangeCountry = useCallback(
    (value?: Country) => {
      dispatch(profileActions.updateProfile({ country: value }));
    },
    [dispatch],
  );

  const validateErrorsTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('serverError'),
    [ValidateProfileError.INCORRECT_AGE]: t('incorrectAge'),
    [ValidateProfileError.INCORRECT_CITY]: t('incorrectCity'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('incorrectUser'),
    [ValidateProfileError.NO_DATA]: t('noData'),
  };

  const initialReducers: ReducerList = {
    profile: profileReducer,
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(className)}>
        {validateErrors?.length
          ? validateErrors.map(err => (
              <Text
                key={err}
                theme={TextTheme.ERROR}
                text={validateErrorsTranslates[err]}
              />
            ))
          : null}
        <ProfileCard
          onChangeInput={onChangeInput}
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default EditableProfileCard;
