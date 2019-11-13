import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingTop: Platform.select({ android: Metrics.statusBarHeight }),
  },

  main: {
    
  }
});