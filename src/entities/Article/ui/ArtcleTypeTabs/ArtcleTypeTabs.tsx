import cn from 'classnames';
import { FC, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from '../../../Article/model/types//article';

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
      { value: ArticleType.JS, content: t('js') },
      { value: ArticleType.TS, content: t('ts') },
      { value: ArticleType.REACT, content: t('react') },
      { value: ArticleType.HTML, content: t('html') },
      { value: ArticleType.CSS, content: t('css') },
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
