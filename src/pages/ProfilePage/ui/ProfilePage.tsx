import cn from 'classnames';
import {
  ProfileCard,
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  profileReducer,
} from 'entities/Profile';
import { useEffect } from 'react';
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

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(s.ProfilePage, className)}>
        <ProfilePageHeader />
        <ProfileCard data={data} isLoading={isLoading} error={error} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
