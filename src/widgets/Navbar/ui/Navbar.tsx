import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
import s from './Navbar.module.css';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(s.Navbar, className)}>
      <Link to="/">
        <AtomIcon className={s.icon}/>
      </Link>
      <div></div>
    </div>
  );
};

export default Navbar;
