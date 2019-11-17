import { action, observable } from 'mobx';
import { Course } from '@/types/Course';

class ObservableStore {
  @observable course: Course;

  @action setCourse(course: Course) {
    this.course = course;
  }
}

const observableStore = new ObservableStore();
export default observableStore;