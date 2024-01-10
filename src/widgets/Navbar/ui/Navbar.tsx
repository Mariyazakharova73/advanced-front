import cn from 'classnames';
import s from './Navbar.module.css'
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ReactComponent as AtomIcon } from 'shared/assets/icons/atom.svg'; 
import { Link } from 'react-router-dom';

export interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={cn(s.Navbar, className)}>
			<Link to='/'><AtomIcon/></Link>
			<div className={s.links}>
			  <AppLink to='/' theme={AppLinkTheme.SECONDARY}>Главная</AppLink>
			  <AppLink to='/about'>О нас</AppLink>
			</div>
		</div>
	);
};

export default Navbar;
