import cn from 'classnames';
import { FC, ReactNode, useCallback } from 'react';
import Card, { CardTheme } from '../Card/Card';
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
    <div className={cn(s.Tabs, className)}>
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
    </div>
  );
};

export default Tabs;
