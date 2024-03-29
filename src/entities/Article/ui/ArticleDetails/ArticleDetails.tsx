import cn from 'classnames';
import { FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ReactComponent as DateIcon } from 'shared/assets/icons/date.svg';
import { ReactComponent as EyeIcon } from 'shared/assets/icons/eye.svg';
import DynamicModuleLoader, {
  ReducerList,
} from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import Text, { TextAlign, TextSize, TextTheme } from 'shared/ui/Text/Text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../../Article/model/selectors/articleDetails';
import { fetchArticleById } from '../../../Article/model/services/fetchArticleById';
import { articleDetailsReducer } from '../../../Article/model/slice/articleDetailsSlice';
import { ArticleBlock, ArticleBlockType } from '../../../Article/model/types/article';
import ArticleCodeBlockComponent from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleDetails.module.css';

export interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const initialReducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = props => {
  const { className, id } = props;

  const dispatch = useAppDispatch();
  const { t } = useTranslation('articlesPage');
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);
  const article = useSelector(getArticleDetailsData);

  useEffect(() => {
    // убрать запрос для сторибука
    if (!process.env.STORYBOOK_APP) {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent key={block.id} className={s.block} block={block} />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent key={block.id} className={s.block} block={block} />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent key={block.id} className={s.block} block={block} />
        );
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={s.avatar} width={100} height={100} border={'50%'} />
        <Skeleton className={s.title} width={300} height={32} />
        <Skeleton className={s.skeleton} width={600} height={24} />
        <Skeleton className={s.skeleton} width={'100%'} height={200} />
        <Skeleton className={s.skeleton} width={'100%'} height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text theme={TextTheme.ERROR} title={t('loadingError')} align={TextAlign.CENTER} />
    );
  } else {
    content = (
      <>
        <GridStack justify="center" max>
          <Avatar size={100} src={article?.img} className={s.avatar} />
        </GridStack>
        <Text
          className={s.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <GridStack gap="16">
          <div className={s.articleInfo}>
            <DateIcon className={s.icon} />
            <Text text={article?.createdAt} />
          </div>
          <div className={s.articleInfo}>
            <EyeIcon className={s.icon} />
            <Text text={String(article?.views)} />
          </div>
        </GridStack>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnMount={true}>
      <div className={cn(s.ArticleDetails, className)}>{content}</div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetails);
