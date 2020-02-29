import commonEn from './common.en.json';
import commonFr from './common.fr.json';
import routesFr from './routes.fr.json';
import routesEn from './routes.en.json';
import courseFr from './course.fr.json';
import courseEn from './course.en.json';
import homeFr from './home.fr.json';
import homeEn from './course.en.json';

let defaultLocale = 'fr';

const fr = {
  common: {...commonFr},
  routes: {...routesFr},
  course: {...courseFr},
  home: {...homeFr},
};

const en = {
  common: {...commonEn},
  routes: {...routesEn},
  course: {...courseEn},
  home: {...homeEn},
};

export {
  defaultLocale,
  fr,
  en,
}