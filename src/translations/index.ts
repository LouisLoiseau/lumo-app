import commonEn from './common.en.json';
import commonFr from './common.fr.json';
import routesFr from './routes.fr.json';
import routesEn from './routes.en.json';

let defaultLocale = 'fr';

const fr = {
  common: {...commonFr},
  routes: {...routesFr},
};

const en = {
  common: {...commonEn},
  routes: {...routesEn},
};

export {
  defaultLocale,
  fr,
  en,
}