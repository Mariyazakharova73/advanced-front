import cn from 'classnames';
import { ArticleDetails } from 'entities/Article';
import RecommendList from 'feature/RecommendList/ui/RecommendList';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Page from 'widgets/Page/Page';
import { articleDetailsCommentsReducer } from '../../model/slices/ArticleDetailsCommentsSlice';
import { articleRecommendationsReducer } from '../../model/slices/articleRecommendationsSlice';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import s from './ArticleDetailsPage.module.css';

export interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleRecommendations: articleRecommendationsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articlesPage');
  const { id } = useParams<{ id: string }>();

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <Page className={cn(s.ArticleDetailsPage, className)}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <RecommendList />
        <ArticleDetailsComments id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
