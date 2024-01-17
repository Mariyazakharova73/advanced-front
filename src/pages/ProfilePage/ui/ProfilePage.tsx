import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './ProfilePage.module.css';

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return <div className={cn(s.ProfilePage, className)}>profile</div>;
};

export default ProfilePage;
