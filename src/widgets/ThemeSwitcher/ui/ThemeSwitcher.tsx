import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { memo } from 'react';
import { ReactComponent as BrushIcon } from 'shared/assets/icons/brush.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button className={cn(className)} theme={ButtonTheme.ICON} onClick={toggleTheme}>
      <BrushIcon />
    </Button>
  );
};

export default memo(ThemeSwitcher);
