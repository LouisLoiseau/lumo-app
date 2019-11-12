import { createDrawerNavigator, DrawerRouter } from 'react-navigation-drawer';
import { HomeScreen, CoursesListScreen } from '@/screens';
import { Drawer } from '@/components';
import { Metrics } from '@/constants';
import { createStackNavigator } from 'react-navigation-stack';
import { I18n } from '@/lib';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('routes.home.title'),
      }),
    },
  },
  {
    initialRouteName: 'Home',
  });

const CoursesStack = createStackNavigator(
  {
    Courses: {
      screen: CoursesListScreen,
      navigationOptions: ({ navigation }) => ({
        title: I18n.t('routes.coursesList.title')
      }),
    },
  },
  {
    initialRouteName: 'Courses',
  });

export default createDrawerNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    Courses: {
      screen: CoursesStack,
    },
  },
  {
    initialRouteName: "Home",
    contentComponent: Drawer,
    drawerWidth: Metrics.screenWidth,
    drawerPosition: 'left',
  }
);