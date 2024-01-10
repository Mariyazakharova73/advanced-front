import cn from 'classnames';
import { FC, useState } from 'react';
import { ReactComponent as ArrowLeft } from 'shared/assets/icons/arrow-left.svg';
import { ReactComponent as ArrowRight } from 'shared/assets/icons/arrow-right.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import s from './Sidebar.module.css';

export interface SidebarProps {
	className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const { className } = props;

	const onToggle = () => {
		setCollapsed(prev => !prev);
	};
	return (
		<div className={cn(s.Sidebar, className, { [s.collapsed]: collapsed })}>
			<div>fff</div>
			<div className={s.buttons}>
				<div className={s.switchers}>
					<ThemeSwitcher />
					<ThemeSwitcher />
				</div>
				<div className={s.wrapper}>
					<Button theme={ThemeButton.CLEAR} onClick={onToggle}>
						{collapsed ? <ArrowRight /> : <ArrowLeft />}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
