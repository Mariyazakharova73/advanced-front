import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LanguageIcon } from 'shared/assets/icons/language.svg';
import Button, { ThemeButton } from 'shared/ui/Button/Button';
import s from './LanguageSwitcher.module.css';

export interface LanguageSwitcherProps {
	className?: string;
}

const LanguageSwitcher: FC<LanguageSwitcherProps> = props => {
	const { className } = props;
	const { i18n } = useTranslation();

	const toggleLanguage = async () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<div className={cn(s.LanguageSwitcher, className)}>
			<Button onClick={toggleLanguage} theme={ThemeButton.CLEAR}>
				<LanguageIcon />
			</Button>
		</div>
	);
};

export default LanguageSwitcher;
