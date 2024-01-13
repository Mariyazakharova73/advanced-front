import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg';
// import AppLink from 'shared/ui/AppLink/AppLink';
import s from './Navbar.module.css';

export interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={cn(s.Navbar, className)}>
      <Link to="/">
        <AtomIcon />
      </Link>
      <div className={s.links}>
        {/* <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О нас</AppLink> */}
      </div>
    </div>
  );
};

export default Navbar;
