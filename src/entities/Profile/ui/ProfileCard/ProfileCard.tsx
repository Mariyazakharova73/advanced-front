import cn from 'classnames';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import s from './ProfileCard.module.css';

export interface ProfileCardProps {
  className?: string;
}

const ProfileCard: FC<ProfileCardProps> = props => {
  const { className } = props;
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  return <div className={cn(s.ProfileCard, className)}></div>;
};

export default ProfileCard;
