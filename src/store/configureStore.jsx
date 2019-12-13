// MobX 
// import { action, observable } from 'mobx';
// import { Course } from '@/types/Course';

// class ObservableStore {
//   @observable course: Course;

//   @action setCourse(course: Course) {
//     this.course = course;
//   }
// }

// const observableStore = new ObservableStore();
// export default observableStore;




// Redux
import {createStore, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk';


export default function configureStore() {
  const middlewares = [thunkMiddleware, logger];
  return createStore(rootReducer, compose(applyMiddleware(
    ...middlewares
  )));
}