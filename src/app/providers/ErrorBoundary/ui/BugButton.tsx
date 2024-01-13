import cn from 'classnames';
import { useEffect, useState, type FC } from 'react';
import Button from 'shared/ui/Button/Button';

export interface BugButtonProps {
  className?: string;
}

// Компонент для тестирования ErrorBoundary
const BugButton: FC<BugButtonProps> = ({ className }) => {
  const [error, setError] = useState(false);

  const getError = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    // eslint-disable-next-line i18next/no-literal-string
    <Button onClick={getError} className={cn(className)}>
      throw error
    </Button>
  );
};

export default BugButton;
