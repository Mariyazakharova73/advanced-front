import cn from 'classnames';
import { getArticleDetailsData } from 'entities/Article';
import { getUserAuthData } from 'entities/User';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Button from 'shared/ui/Button/Button';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import s from './ArticleDetailsPageHeader.module.css';

export interface ArticleDetailsPageHeaderProps {
  className?: string;
}

const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = props => {
  const { className } = props;
  const { t } = useTranslation('articlesPage');
  const authData = useSelector(getUserAuthData);
  const article = useSelector(getArticleDetailsData);
  const canEdit = authData?.id === article?.userId;

  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article_details}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
    <GridStack gap="8" className={cn(s.ArticleDetailsPageHeader, className)}>
      <Button className={s.backBtn} onClick={onBackToList}>
        {t('back')}
      </Button>
      {canEdit && (
        <Button className={s.editBtn} onClick={onEditArticle}>
          {t('edit')}
        </Button>
      )}
    </GridStack>
  );
};

export default ArticleDetailsPageHeader;
