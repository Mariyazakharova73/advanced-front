import cn from 'classnames';
import { memo, type FC } from 'react';
import Code from 'shared/ui/Code/Code';
import { type ArticleCodeBlock } from './../../model/types/article';
import s from './ArticleCodeBlockComponent.module.css';

export interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={cn(s.ArticleCodeBlockComponent, className)}>
      <Code text={block.code} />
    </div>
  );
};

export default memo(ArticleCodeBlockComponent);
