import commonEn from './common.en.json';
import commonFr from './common.fr.json';

let defaultLocale = 'fr';

const fr = {
  ...commonFr,
};

const en = {
  ...commonEn,
};

export {
  defaultLocale,
  fr,
  en,
}