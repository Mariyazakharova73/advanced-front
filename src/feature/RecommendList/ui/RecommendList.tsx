import cn from 'classnames';
import { ArticleView } from 'entities/Article';
import ArticleList from 'entities/Article/ui/ArticleList/ArticleList';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import Text from 'shared/ui/Text/Text';
import s from './RecommendList.module.css';
import { useArticleRecommendList } from '../api/articleRecommendationsApi';

export interface RecommendListProps {
  className?: string;
}

const RecommendList = ({ className }: RecommendListProps) => {
  const { t } = useTranslation('articlesPage');

  const { isLoading, data: articles, error } = useArticleRecommendList(3);

  if (isLoading || error || !articles) {
    return null;
  }

  return (
    <GridStack direction="row" gap="8" className={cn(s.RecommendList, className)}>
      <Text title={t('recomendations')} className={s.commentTitle} />
      <ArticleList
        articles={articles}
        view={ArticleView.SMALL}
        className={s.recommendations}
        target="_blank"
      />
    </GridStack>
  );
};

export default memo(RecommendList);
