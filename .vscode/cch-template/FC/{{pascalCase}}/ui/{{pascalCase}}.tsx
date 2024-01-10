import cn from 'classnames';
import s from './{{pascalCase}}.module.css';

export interface {{pascalCase}}Props {
  className?: string
}

const {{pascalCase}} = ({ className } : {{pascalCase}}Props) => {
  return (
    <div className={cn(s.{{pascalCase}}, className)}>
      
    </div>
  )
}

export default {{pascalCase}};

