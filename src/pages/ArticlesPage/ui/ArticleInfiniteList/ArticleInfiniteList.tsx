import ArticleList from 'entities/Article/ui/ArticleList/ArticleList';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import Text from 'shared/ui/Text/Text';
import {
  getArticlesPageIsLoading,
  getArticlesPageView,
  getArticlesPagesError,
} from '../../model/selectors/articles';
import { getArticles } from '../../model/slices/ArticlePageSlice';

export interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = props => {
  const { className } = props;
  const { t } = useTranslation('articlesPage');

  const articles = useSelector(getArticles.selectAll);
  const view = useSelector(getArticlesPageView);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPagesError);

  if (error) {
    <Text text={t('loadingArticlesError')} />;
  }

  return (
    <ArticleList
      view={view}
      articles={articles}
      isLoading={isLoading}
      className={className}
    />
  );
};

export default ArticleInfiniteList;
