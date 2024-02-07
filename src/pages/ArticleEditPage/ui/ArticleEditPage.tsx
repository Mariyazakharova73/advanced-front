import cn from 'classnames';
import { useParams } from 'react-router-dom';
import Page from 'widgets/Page/Page';
import s from './ArticleEditPage.module.css';

export interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
  const { id } = useParams<{ id: string }>();
  const isEdit = Boolean(id);

  return (
    <Page className={cn(s.ArticleEditPage, className)}>
      {isEdit ? 'Редактирование статьи' : 'Создание статьи'}
    </Page>
  );
};

export default ArticleEditPage;
