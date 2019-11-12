import { createStackNavigator } from 'react-navigation-stack';
import { Header } from '@/components';
import DrawerNavigator from './DrawerNavigator';

export default createStackNavigator(
  {
    Home: {
      screen: DrawerNavigator
    }
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
  }
);