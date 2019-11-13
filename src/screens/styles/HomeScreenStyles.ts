import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: Metrics.realHeight,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
});