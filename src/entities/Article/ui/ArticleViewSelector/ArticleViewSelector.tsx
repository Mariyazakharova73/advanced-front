import cn from 'classnames';
import { FC } from 'react';
import { ReactComponent as MenuLineIcon } from 'shared/assets/icons/menu-line.svg';
import { ReactComponent as MenuIcon } from 'shared/assets/icons/menu.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import Icon from 'shared/ui/Icon/Icon';
import GridStack from 'shared/ui/Stack/GridStack/GridStack';
import { ArticleView } from '../../../Article/model/types/article';
import s from './ArticleViewSelector.module.css';

export interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: MenuIcon,
  },
  {
    view: ArticleView.BIG,
    icon: MenuLineIcon,
  },
];

const ArticleViewSelector: FC<ArticleViewSelectorProps> = props => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };
  return (
    <GridStack className={cn(className)} gap="8">
      {viewTypes.map((item, index) => {
        return (
          <Button
            theme={ButtonTheme.CLEAR}
            key={index}
            onClick={onClick(item.view)}
            className={cn({ [s.notActive]: view !== item.view })}
          >
            <Icon Svg={item.icon} className={s.icon} />
          </Button>
        );
      })}
    </GridStack>
  );
};

export default ArticleViewSelector;
