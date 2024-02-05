import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Page from 'widgets/Page/Page';
import s from './ArticleEditPage.module.css';

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={cn(s.ArticleEditPage, className)}>
      {isEdit ? 'Редактирование статьи' : 'Создание статьи'}
    </Page>
  );
};

export default ArticleEditPage;
