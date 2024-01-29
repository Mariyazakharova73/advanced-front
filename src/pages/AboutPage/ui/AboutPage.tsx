import { useTranslation } from 'react-i18next';
import Page from 'shared/ui/Page/Page';

const AboutPage = () => {
  const { t } = useTranslation('aboutPage');
  return <Page>{t('about')}</Page>;
};

export default AboutPage;
