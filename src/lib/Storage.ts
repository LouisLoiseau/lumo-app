import { AsyncStorage } from 'react-native';
import { Course } from '@/types/Course';

class Storage {
  public static getCourse(): Promise<Course> {
    return AsyncStorage.getItem('@course:current').then(data => {
      if (data !== null) {
        let course = JSON.parse(data);
        return course ? Promise.resolve(course) : Promise.reject(null);
      }
    });
  }
}

export default Storage;