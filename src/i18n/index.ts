import i18next from 'i18next';
import Backend from 'i18next-fs-backend';

i18next
  .use(Backend)
  .init({
    lng: 'nl', // default language
    fallbackLng: 'nl',
    supportedLngs: ['nl', 'en', 'tr'],
    defaultNS: 'translation',
    ns: 'translation',
    backend: {
      loadPath: './src/locales/{{lng}}.json',
    },
  });

export default i18next; 