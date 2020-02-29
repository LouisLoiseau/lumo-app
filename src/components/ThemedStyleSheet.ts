import { ViewStyle, TextStyle, ImageStyle } from 'react-native';
import Utils from '@/lib/Utils';

type THEMES_TYPES = 'light' | 'dark' | 'colorblind';

type NamedStyle<T> = {
  [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
}

type ThemedStyle<T> = {
  [key in THEMES_TYPES]?: NamedStyle<T>;
} & {
  default: NamedStyle<T>
}

export default class ThemedStyleSheet {
  public static create<T extends ThemedStyle<T> | ThemedStyle<any>>(styles: ThemedStyle<T>) {
    let result = {
      default: styles.default,
      dark: styles.dark ? Utils.mergeDeep(styles.default, styles.dark) : {},
      light: styles.light ? Utils.mergeDeep(styles.default, styles.light) : {},
      colorblind: styles.colorblind ? Utils.mergeDeep(styles.default, styles.colorblind) : {},
    };
    return result;
  }
};