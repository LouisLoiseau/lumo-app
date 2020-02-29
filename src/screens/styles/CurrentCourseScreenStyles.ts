import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Metrics.screenWidth,
    height: Metrics.realHeight,
  },

  startCourseButton: {
    backgroundColor: 'green',
    padding: 15,
  },

  startCourseButtonText: {
    color: '#fff',
    fontSize: 20,
  },
});