import React from 'react';
import 'react-native-gesture-handler';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function Router() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
