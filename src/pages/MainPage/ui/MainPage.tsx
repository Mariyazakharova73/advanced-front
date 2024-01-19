import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t } = useTranslation('mainPage');
  return (
    <div>
      {t('main')}
      <div></div>
    </div>
  );
};

export default MainPage;
