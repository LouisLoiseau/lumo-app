import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen } from '@/screens';
import { createAppContainer } from 'react-navigation';


export default createAppContainer(
	createStackNavigator(
		{
			Home: {
				screen: HomeScreen,
			},
		},
		{
			initialRouteName: "Home",
			headerMode: "none",
		}
	)
);