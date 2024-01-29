import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.css';
import Page from 'shared/ui/Page/Page';

export interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <Page className={cn(s.NotFoundPage, className)}>{t('not-found')}</Page>;
};

export default NotFoundPage;
