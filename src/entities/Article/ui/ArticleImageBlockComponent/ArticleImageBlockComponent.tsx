import { memo, type FC } from 'react';
import Text, { TextAlign } from 'shared/ui/Text/Text';
import { type ArticleImageBlock } from '../../model/types/article';
import s from './ArticleImageBlockComponent.module.css';
import cn from 'classnames'

export interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = ({
  className,
  block,
}) => {
  return (
    <div className={cn(s.ArticleImageBlockComponent, className)}>
      <img className={s.img} src={block.src} alt={`${block.title}.`} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};

export default memo(ArticleImageBlockComponent);
