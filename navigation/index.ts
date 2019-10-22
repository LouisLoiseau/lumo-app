import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "../screens/HomeScreen";
import { createAppContainer } from "react-navigation";


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