import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation('main');
  return <div>{t('main')}</div>;
};

export default MainPage;