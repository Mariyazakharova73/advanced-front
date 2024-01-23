import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import s from './ArticleDetailsPage.module.css';
import { memo } from 'react';

export interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articlesPage');
  return <div className={cn(s.ArticleDetailsPage, className)}>ArticleDetailsPage</div>;
};

export default memo(ArticleDetailsPage);
