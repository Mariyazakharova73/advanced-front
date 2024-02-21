import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import Page from 'widgets/Page/Page';
import s from './ForbiddenPage.module.css';

export interface ForbiddenPageProps {
  className?: string;
}

const ForbiddenPage = ({ className }: ForbiddenPageProps) => {
  const { t } = useTranslation();
  return <Page className={cn(s.ForbiddenPage, className)}>{t('forbidden')}</Page>;
};

export default ForbiddenPage;
