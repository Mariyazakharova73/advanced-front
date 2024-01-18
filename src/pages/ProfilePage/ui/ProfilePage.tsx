import cn from 'classnames';
import { fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import s from './ProfilePage.module.css';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';

export interface ProfilePageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  profile: profileReducer,
};

const ProfilePage = ({ className }: ProfilePageProps) => {
  const dispatch = useAppDispatch();
  const data = useSelector(getProfileData);

  useEffect(() => {
    dispatch(fetchProfileData());
    console.log(data)
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(s.ProfilePage, className)}>profile</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
