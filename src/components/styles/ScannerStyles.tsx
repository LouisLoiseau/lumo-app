import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.statusBarHeight,
    position: 'absolute',
    top: Metrics.statusBarHeight,
    left: 0,
    backgroundColor: '#000',
    zIndex: 1
  },

  scanner: {
    width: '100%',
    height: '100%',
  },
});