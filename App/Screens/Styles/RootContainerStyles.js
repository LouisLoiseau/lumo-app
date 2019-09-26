import { StyleSheet } from 'react-native';
import Metrics from '@/Constants/Metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    paddingTop: Metrics.statusBarHeight,
  }
});
