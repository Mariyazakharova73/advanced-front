import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import s from './{{pascalCase}}.module.css';

export interface {{pascalCase}}Props {
  className?: string
}

const {{pascalCase}} = ({ className } : {{pascalCase}}Props) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.{{pascalCase}}, className)}>
      
    </div>
  )
}

export default {{pascalCase}};

