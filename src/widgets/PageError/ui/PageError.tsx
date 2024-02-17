import cn from 'classnames';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import s from './PageError.module.css';

export interface PageErrorProps {
  className?: string;
}

const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <GridStack justify="center" className={cn(s.PageError, className)}>
      <p>{t('error')}</p>
      <Button onClick={reloadPage}>{t('update-page')}</Button>
    </GridStack>
  );
};

export default PageError;
