import cn from 'classnames';
import EditableProfileCard from 'feature/EditableProfileCard/ui/EditableProfileCard';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Text from 'shared/ui/Text/Text';
import Page from 'widgets/Page/Page';
import s from './ProfilePage.module.css';
import EditableProfileCardHeader from 'feature/EditableProfileCard/ui/EditableProfileCardHeader';

export interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { id } = useParams<{ id: string }>();

  return (
    <Page className={cn(s.ProfilePage, className)}>
      <EditableProfileCardHeader />
      <EditableProfileCard id={id} />
    </Page>
  );
};

export default ProfilePage;
