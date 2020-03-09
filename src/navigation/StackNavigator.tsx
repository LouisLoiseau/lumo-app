import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { CourseFinishedScreen } from '@/screens';
import DrawerNavigator from './DrawerNavigator';

export type RootStackNavigatorParams = {
  Home: {
  },
  CourseFinished: {
  },
};

const Stack = createStackNavigator<RootStackNavigatorParams>();
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode="none">
      <Stack.Screen name="Home" component={DrawerNavigator} />
      <Stack.Screen name="CourseFinished" component={CourseFinishedScreen} />
    </Stack.Navigator>
  );
}
