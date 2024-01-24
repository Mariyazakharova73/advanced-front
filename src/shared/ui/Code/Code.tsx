import cn from 'classnames';
import { memo, useCallback, type FC } from 'react';
import { ButtonTheme } from 'shared/ui/Button/Button';
import Button from '../Button/Button';
import { ReactComponent as CopyIcon } from 'shared/assets/icons/copy.svg';
import Icon from '../Icon/Icon';
import s from './Code.module.css';

export interface CodeProps {
  className?: string;
  text: string;
}

const Code: FC<CodeProps> = ({ className, text }) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={cn(s.Code, className)}>
      <Button className={s.copyBtn} onClick={onCopy} theme={ButtonTheme.CLEAR}>
        <Icon Svg={CopyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
};

export default memo(Code);
