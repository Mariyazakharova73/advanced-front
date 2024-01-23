import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.css';
import { memo } from 'react';

export interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation();
  return <div className={cn(s.ArticlesPage, className)}>ArticlesPage</div>;
};

export default memo(ArticlesPage);
