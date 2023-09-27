import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales';

i18n.use(initReactI18next).init({
	fallbackLng: 'en-US',
	interpolation: {
		escapeValue: false
	},
	resources: translations
});
