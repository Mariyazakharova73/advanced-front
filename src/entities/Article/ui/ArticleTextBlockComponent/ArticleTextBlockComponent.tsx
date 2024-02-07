import cn from 'classnames';
import { memo, type FC } from 'react';
import Text from 'shared/ui/Text/Text';
import { type ArticleTextBlock } from '../../model/types/article';
import s from './ArticleTextBlockComponent.module.css';

export interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={cn(s.ArticleTextBlockComponent, className)}>
      {block.title && <Text title={block.title} className={s.title} />}
      {block.paragraphs.map((item, index) => (
        <Text key={index} text={item} className={s.paragraph} />
      ))}
    </div>
  );
};

export default memo(ArticleTextBlockComponent);
