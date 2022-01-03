import i18n from 'i18next';
import { initReactI18next} from 'react-i18next';

i18n.use(initReactI18next).init({
    lng: 'es',
    fallbackLng: 'es',
    resources: {
        es: {
            translation: {
                "title": "Bienvenido a la web de Chris Rosas"
            }

        },
        en: {
            translation: {
                "title": "welcome to chris rosas web"
            }

        }
    }
})