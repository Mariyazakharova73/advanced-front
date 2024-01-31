import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import s from './ArticleList.module.css';

export interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view: ArticleView;
}

const ArticleList: FC<ArticleListProps> = props => {
  const { className, articles, isLoading, view } = props;
  const { t } = useTranslation('articlesPage');

  // if (error) {
  //   return (
  //     <Text
  //       align={TextAlign.CENTER}
  //       theme={TextTheme.ERROR}
  //       size={TextSize.L}
  //       title={t('Ошибка загрузки статей')}
  //     />
  //   );
  // }

  if (!isLoading && !articles.length) {
    return (
      <div className={s.text}>
        <Text title={t('articleNotFound')} />
      </div>
    );
  }
  const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 2)
      .fill(0)
      .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);
  };

  return (
    <div className={cn(s.ArticleList, className, s[view])}>
      {articles.map(article => (
        <ArticleListItem article={article} view={view} key={article.id} />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
};

export default ArticleList;
