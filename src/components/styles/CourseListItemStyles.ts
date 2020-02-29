import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth * 0.45,
    height: Metrics.screenWidth * 0.45,
    margin: Metrics.screenWidth * 0.025,
  },

  bgImage: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },

  nameView: {
    width: '100%',
    height: Metrics.screenWidth * 0.1,
    backgroundColor: '#2C5697',
    position: 'absolute',
    bottom: 0,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 10,
  },

  nameText: {
    color: '#fff',
    fontSize: 15,
  },
});