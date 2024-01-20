import cn from 'classnames';
import {
  ProfileCard,
  fetchProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadOnly,
  profileActions,
  profileReducer,
} from 'entities/Profile';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import s from './ProfilePage.module.css';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

export interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadOnly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  const onChangeInput = useCallback(
    (value?: string, name?: string) => {
      if (value && name) {
        dispatch(profileActions.updateProfile({ [name]: value }));
      }
    },
    [dispatch],
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(s.ProfilePage, className)}>
        <ProfilePageHeader />
        <ProfileCard
          onChangeInput={onChangeInput}
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
