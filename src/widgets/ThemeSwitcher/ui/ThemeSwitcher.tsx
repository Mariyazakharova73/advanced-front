import { useTheme } from 'app/providers/ThemeProvider';
import cn from 'classnames';
import { ReactComponent as BrushIcon } from 'shared/assets/icons/brush.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

export interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();

  return (
    <Button className={cn(className)} theme={ThemeButton.ICON} onClick={toggleTheme}>
      <BrushIcon />
    </Button>
  );
};

export default ThemeSwitcher;
