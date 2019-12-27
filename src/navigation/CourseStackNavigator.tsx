import { createStackNavigator } from 'react-navigation-stack';
import { SelectCourseScreen, CourseSummaryScreen, CurrentCourseScreen } from '@/screens';

export default createStackNavigator(
  {
    SelectCourse: {
      screen: SelectCourseScreen,
      params: {
        title: 'routes.home.title',
      },
    },
    CourseSummary: {
      screen: CourseSummaryScreen,
      params: {
        title: 'routes.courseSummary.title',
      },
    },
    CurrentCourse: {
      screen: CurrentCourseScreen,
    },
  },
  {
    initialRouteName: 'SelectCourse',
    headerMode: 'none',
  }
);