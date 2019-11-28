import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    zIndex: 3,
    position: 'absolute',
    bottom: Metrics.screenHeight * 0.03,
    right: ((Metrics.screenWidth - Metrics.screenWidth * 0.9) / 2) + 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  containerLight: {
    borderBottomColor: '#fff',
  },

  buttonTextLight: {
    color: '#fff',
    fontSize: 17,
  },

  buttonTextDark: {
    color: '#000',
    fontSize: 17,
  },
});