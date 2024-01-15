import cn from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as LanguageIcon } from 'shared/assets/icons/language.svg';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
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
    <Button className={cn(className)} onClick={toggleLanguage} theme={ButtonTheme.ICON}>
      <LanguageIcon />
    </Button>
  );
};

export default LanguageSwitcher;
