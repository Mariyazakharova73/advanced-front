import { useTranslation } from 'react-i18next';


const AboutPage = () => {
  const { t, i18n } = useTranslation();
  return <div>{t('about')}</div>;
};

export default AboutPage;