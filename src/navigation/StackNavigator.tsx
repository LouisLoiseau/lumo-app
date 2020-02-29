import { createStackNavigator } from 'react-navigation-stack';
import { CourseFinishedScreen } from '@/screens';
import DrawerNavigator from './DrawerNavigator';

export default createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator
    },
    CourseFinished: {
      screen: CourseFinishedScreen,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);