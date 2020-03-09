import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '@/screens';
import { DrawerContent } from '@/components';
import { Metrics } from '@/constants';
import CourseStackNavigator from './CourseStackNavigator';

export type DrawerNavigatorParams = {
  Home: {
    title: 'routes.home.title',
  },
  Courses: {
    title: 'routes.coursesList.title',
  },
};

const Drawer = createDrawerNavigator<DrawerNavigatorParams>();
export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName='Home'
      drawerStyle={{
        width: Metrics.screenWidth,
      }}
      drawerPosition='left'
      drawerContent={DrawerContent}>
      <Drawer.Screen
        name='Home'
        component={HomeScreen}
        initialParams={{
          title: 'routes.home.title',
        }}
      />
      <Drawer.Screen
        name='Courses'
        component={CourseStackNavigator}
        initialParams={{
          title: 'routes.coursesList.title',
        }}
      />
    </Drawer.Navigator>
  );
}