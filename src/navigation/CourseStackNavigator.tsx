import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SelectCourseScreen,
  CourseSummaryScreen,
  CurrentCourseScreen,
} from '@/screens';

export type CourseStackNavigatorParams = {
  SelectCourse: {
    title: 'routes.home.title'
  },
  CourseSummary: {
    title: 'routes.coursesSummary.title',
  },
  CurrentCourse: {

  },
};

const Stack = createStackNavigator<CourseStackNavigatorParams>();
export default function CourseStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SelectCourse" headerMode="none">
      <Stack.Screen
        name="SelectCourse"
        component={SelectCourseScreen}
        initialParams={{ title: 'routes.home.title' }}
      />
      <Stack.Screen
        name="CourseSummary"
        component={CourseSummaryScreen}
        initialParams={{ title: 'routes.coursesSummary.title' }}
      />
      <Stack.Screen name="CurrentCourse" component={CurrentCourseScreen} />
    </Stack.Navigator>
  );
};