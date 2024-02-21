import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './AdminPanelPage.module.css';
import Page from 'widgets/Page/Page';

export interface AdminPanelPageProps {
  className?: string;
}

const AdminPanelPage = ({ className }: AdminPanelPageProps) => {
  const { t } = useTranslation();
  return <Page className={cn(s.AdminPanelPage, className)}>ррр</Page>;
};

export default AdminPanelPage;
