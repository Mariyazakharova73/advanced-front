import cn from 'classnames';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { ReactComponent as EyeIcon } from 'shared/assets/icons/eye.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Card from 'shared/ui/Card/Card';
import Icon from 'shared/ui/Icon/Icon';
import Text from 'shared/ui/Text/Text';
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from '../../model/types/article';
import ArticleTextBlockComponent from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import s from './ArticleListItem.module.css';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}

const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation('articlesPage');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article_details + article.id);
  }, [article.id, navigate]);

  const types = <Text text={article.type.join(', ')} className={s.types} />;
  const views = (
    <>
      <Text text={String(article.views)} />
      <Icon Svg={EyeIcon} className={s.icon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
      <div className={cn(s.ArticleListItem, className)}>
        <Card className={s.bigCard}>
          <div className={s.header}>
            <Avatar size={30} src={article.img} />
            <Text text={article.user?.username || 'username'} className={s.username} />
            <Text text={article.createdAt} className={s.dateBig} />
          </div>
          <Text text={article.title} className={s.title} />
          {types}
          <img src={article.img} className={s.bigImg} alt={`${article.title}.`} />
          {textBlock && (
            <ArticleTextBlockComponent className={s.textBlock} block={textBlock} />
          )}
          <div className={s.footer}>
            <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
              {t('more')}
            </Button>
            <div className={s.bigViews}>{views}</div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={cn(s.ArticleListItem, className)}>
      <Card className={s.card} onClick={onOpenArticle}>
        <div className={s.imageWrapper}>
          <img src={article.img} className={s.img} alt={`${article.title}.`} />
          <Text text={article.createdAt} className={s.date} />
        </div>
        <div className={s.infoWrapper}>
          {types}
          <div className={s.views}>{views}</div>
        </div>
        <Text text={article.title} className={s.title} />
      </Card>
    </div>
  );
};

export default ArticleListItem;
