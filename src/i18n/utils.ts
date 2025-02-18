import nlTranslations from '../locales/nl.json';
import enTranslations from '../locales/en.json';
import trTranslations from '../locales/tr.json';

const translations = {
  nl: nlTranslations,
  en: enTranslations,
  tr: trTranslations,
};

export function getLanguageFromURL(pathname: string) {
  const langCode = pathname.split('/')[1];
  if (langCode && ['nl', 'en', 'tr'].includes(langCode)) {
    return langCode;
  }
  return 'nl';
}

export function useTranslations(lang: string) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${lang}`);
        return keys[keys.length - 1];
      }
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    return key;
  };
} 