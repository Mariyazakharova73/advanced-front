import cn from 'classnames';
import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import Text from 'shared/ui/Text/Text';
import { articleDetailsCommentsReducer } from '../model/slices/ArticleDetailsCommentsSlice';
import s from './ArticleDetailsPage.module.css';

export interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t } = useTranslation('articlesPage');
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div className={cn(s.ArticleDetails, className)}>{t('articleNotFound')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount>
      <div className={cn(s.ArticleDetailsPage, className)}>
        <ArticleDetails id={id} />
        <Text title={t('comments')} className={s.commentTitle} />
        <CommentList isLoading={false} comments={[]} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
