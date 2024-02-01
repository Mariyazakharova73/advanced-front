import cn from 'classnames';
import { ArticleType } from 'entities/Article/model/types/article';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';

export interface ArtcleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (value: ArticleType) => void;
}

const ArtcleTypeTabs: FC<ArtcleTypeTabsProps> = props => {
  const { className, value, onChangeType } = props;

  const { t } = useTranslation('articlesPage');

  const typeTabs = useMemo<TabItem[]>(() => {
    return [
      { value: ArticleType.ALL, content: t('all') },
      { value: ArticleType.ECONOMICS, content: t('economics') },
      { value: ArticleType.SCIENCE, content: t('science') },
      { value: ArticleType.IT, content: t('it') },
    ];
  }, [t]);

  const onChange = useCallback(
    (tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    },
    [onChangeType],
  );

  return (
    <Tabs
      tabs={typeTabs}
      value={value}
      onTabClick={onChange}
      className={cn(className)}
    ></Tabs>
  );
};

export default ArtcleTypeTabs;
