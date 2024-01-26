import cn from 'classnames';
import { FC } from 'react';
import Loader from 'shared/ui/Loader/Loader';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import s from './ArticleList.module.css';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

const ArticleList: FC<ArticleListProps> = props => {
  const { className, articles, isLoading, view } = props;

  const renderArticle = (article: Article) => {
    return <ArticleListItem key={article.id} view={view} article={article} />;
  };

  if (isLoading) {
    return (
      <div className={s.loaderWrapper}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={cn(s.ArticleList, className, s[view])}>
      {articles.length > 0 ? articles.map(item => renderArticle(item)) : null}
    </div>
  );
};

export default ArticleList;
