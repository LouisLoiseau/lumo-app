import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '@/Screens/HomeScreen';

const routes = {
  Home: {
    screen: HomeScreen
  },
}

const config = {
  initialRouteName: "Home",
  headerMode: 'none',
  navigationOptions: {
    header: null,
    gesturesEnabled: false
  }
}

export default createStackNavigator(routes, config);