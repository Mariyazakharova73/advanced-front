import cn from 'classnames';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOrder } from 'shared/types';
import Select, { SelectOption } from 'shared/ui/Select/Select';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import { ArticleSortField } from '../../../Article/model/types/article';

export interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector = (props: ArticleSortSelectorProps) => {
  const { className, onChangeOrder, onChangeSort, order, sort } = props;
  const { t } = useTranslation('articlesPage');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => {
    return [
      { value: 'asc', content: t('asc') },
      { value: 'desc', content: t('desc') },
    ];
  }, [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => {
    return [
      { value: ArticleSortField.CREATED, content: t('sorBytDate') },
      { value: ArticleSortField.TITLE, content: t('sortByTitle') },
      { value: ArticleSortField.VIEWS, content: t('sortByViews') },
    ];
  }, [t]);

  return (
    <GridStack gap="16" className={cn(className)}>
      <Select<ArticleSortField>
        label={t('sort')}
        options={sortFieldOptions}
        onChange={onChangeSort}
        value={sort}
      />
      <Select<SortOrder> options={orderOptions} onChange={onChangeOrder} value={order} />
    </GridStack>
  );
};

export default ArticleSortSelector;
