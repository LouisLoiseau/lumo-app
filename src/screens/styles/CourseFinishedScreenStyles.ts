import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: Metrics.realHeight,
  },
});