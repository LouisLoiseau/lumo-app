import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  container: {
    width: Metrics.screenWidth,
    height: (Metrics.screenHeight - Metrics.statusBarHeight) - (Metrics.screenHeight * 0.075),
    backgroundColor: '#fff',
    top: Metrics.statusBarHeight,
  },

  drawerTitle: {
    fontSize: 106,
    color: 'rgba(170, 170, 170, 0.24)',
    fontWeight: 'bold',
    width: Metrics.screenWidth,
    maxWidth: Metrics.screenWidth,
    marginLeft: 10,
  },

  drawerNavContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingLeft: Metrics.screenWidth * 0.075,
    height: '15%',
  },

  drawerNavButton: {
    
  },

  drawerNavButtonText: {
    color: '#000',
    fontSize: 28,
    fontWeight: 'bold',
  },
});