import t from './I18n';

class Utils {
  public static formatDuration(duration: number): string {
    let unit = t.t('course.utils.units.min');
    if (duration >= 60) {
      unit = t.t('course.utils.units.hour');
      duration = duration / 60;
    }
    return `${duration} ${unit}`;
  }

  public static mergeDeep(...objects: object[]) {
    const isObject = obj => obj && typeof obj === 'object';
    return objects.reduce((prev, obj) => {
      if (obj === undefined) obj = {};
      Object.keys(obj).forEach(key => {
        const pVal = prev[key];
        const oVal = obj[key];
        if (isObject(pVal) && isObject(oVal)) {
          prev[key] = this.mergeDeep(pVal, oVal);
        } else {
          prev[key] = oVal;
        }
      });
      return prev;
    }, {});
  }
}

export default Utils;