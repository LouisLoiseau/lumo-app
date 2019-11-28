import t from './I18n';

class Utils {
  static formatDuration(duration: number): string {
    let unit = t.t('course.utils.units.min');
    if (duration >= 60) {
      unit = t.t('course.utils.units.hour');
      duration = duration / 60;
    }
    return `${duration} ${unit}`;
  }
}

export default Utils;