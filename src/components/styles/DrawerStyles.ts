import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.statusBarHeight,
    paddingTop: Metrics.statusBarHeight,
  },
});