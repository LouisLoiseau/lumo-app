import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  coursesList: {
    width: Metrics.screenWidth,
  },

  contentScrollView: {
    paddingBottom: 50,
  },

  coursesListContent: {

  },

  coursesListColumn: {
    justifyContent: 'center',
    width: '100%',
  },

  bgImageContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.3,
  },

  bgImage: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },

  bgImageTextOverlay: {
    position: 'absolute',
    textAlign: 'center',
    bottom: 15,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    zIndex: 3,
    alignSelf: 'center',
  },

  bgImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 2,
  },

  pageTitle: {
    width: Metrics.screenWidth,
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
});