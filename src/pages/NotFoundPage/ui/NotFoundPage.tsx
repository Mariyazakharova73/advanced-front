import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './NotFoundPage.module.css';

export interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return <div className={cn(s.NotFoundPage, className)}>{t('not-found')}</div>;
};

export default NotFoundPage;
