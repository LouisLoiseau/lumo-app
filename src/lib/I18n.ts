import * as Translations from '@/translations';
import * as Localization from 'react-native-localize';
import { TranslatorParam } from '@/types/TranslatorTypes';

class I18n {
  public static locale: string;
  public static t: (key: string) => string;

  private static deepTrans(tree: string[], curr: TranslatorParam): string {
    const current = curr[tree.shift()];
    if (!tree.length) return current as string;

    return this.deepTrans(tree, current as TranslatorParam);
  }

  public static translate(key: string, params?: TranslatorParam): string {
    this.locale = this.getCurrentLocale();
    let translation = this.deepTrans(key.split('.'), Translations[this.locale]);
    if (typeof translation !== 'string') {
      return `[Missing key for trans for key: ${key}]`;
    }
    if (!params) return translation.trim();

    Object.entries(params).forEach(([key, value]) => {
      translation = translation.replace(`{:${key}}`, value.toString());
    });

    return translation.trim();
  }

  private static getPreferredLocale(): string{
    let userPreferredLocales = Localization.locales;
    for (var locale of userPreferredLocales){
      if(Translations.hasOwnProperty(locale.languageCode)){
        return locale.languageCode;
      }
    }
    return this.getDefaultLocale();
  }

  private static getDefaultLocale(): string {
    return Translations.defaultLocale;
  }

  public static getCurrentLocale(){
    return (this.locale ? this.locale : this.getPreferredLocale())
  }
}


// Aliases
I18n.t = I18n.translate;

export default I18n;