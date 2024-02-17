import cn from 'classnames';
import { FC, ReactNode, useCallback } from 'react';
import Card, { CardTheme } from '../Card/Card';
import GridStack from '../Stack/GridStack/GridStack';
import s from './Tabs.module.css';

export interface TabItem {
  value: string;
  content: ReactNode;
}

export interface TabsProps {
  className?: string;
  tabs: TabItem[];
  // текущее значение
  value: string;
  onTabClick: (tab: TabItem) => void;
}

const Tabs: FC<TabsProps> = props => {
  const { className, tabs, onTabClick, value } = props;

  const handleClick = useCallback(
    // используем замыкание. чтобы прокинуть tab
    (tab: TabItem) => {
      return () => {
        onTabClick(tab);
      };
    },
    [onTabClick],
  );

  return (
    <GridStack gap="8" className={cn(s.Tabs, className)} justify="stretch">
      {tabs.map(tab => {
        return (
          <Card
            className={s.card}
            key={tab.value}
            theme={tab.value === value ? CardTheme.OUTLINED : CardTheme.NORMAL}
            onClick={handleClick(tab)}
          >
            {tab.content}
          </Card>
        );
      })}
    </GridStack>
  );
};

export default Tabs;
