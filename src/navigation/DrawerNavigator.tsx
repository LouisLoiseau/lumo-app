import { createDrawerNavigator } from 'react-navigation-drawer';
import { HomeScreen, CurrentCourseScreen, SelectCourseScreen } from '@/screens';
import { Drawer } from '@/components';
import { Metrics } from '@/constants';
import CourseStackNavigator from './CourseStackNavigator';

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      params: {
        title: 'routes.home.title',
      },
    },
    Courses: {
      screen: CourseStackNavigator,
      params: {
        title: 'routes.coursesList.title',
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: Drawer,
    drawerWidth: Metrics.screenWidth,
    drawerPosition: 'left',
    // drawerBackgroundColor: 'transparent',
    // overlayColor: 'transparent',
  }
);