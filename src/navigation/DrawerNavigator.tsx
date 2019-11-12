import { createDrawerNavigator } from 'react-navigation-drawer';
import { HomeScreen, CoursesListScreen } from '@/screens';
import { Drawer } from '@/components';
import { Metrics } from '@/constants';

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      params: {
        title: 'routes.home.title',
      },
    },
    Courses: {
      screen: CoursesListScreen,
      params: {
        title: 'routes.home.title',
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