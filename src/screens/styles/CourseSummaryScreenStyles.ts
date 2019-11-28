import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export default StyleSheet.create({
  bgImageContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.3,
    marginBottom: Metrics.screenHeight * 0.08 / 2
  },

  bgImage: {
    width: '100%',
    height: '100%',
    zIndex: 1,
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

  courseNameOverlay: {
    width: Metrics.screenWidth * 0.9,
    height: Metrics.screenHeight * 0.08,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: -Metrics.screenHeight * 0.08 / 2,
    zIndex: 4,
    alignSelf: 'center',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  courseNameText: {
    color: '#2C5697',
    fontSize: 23,
    fontWeight: 'bold',
  },

  startButton: {
    width: Metrics.screenWidth * 0.7,
    height: Metrics.screenHeight * 0.09,
    backgroundColor: '#FF6F61',
    borderRadius: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },

  startButtonText: {
    color: '#fff',
    fontSize: 16,
  },

  courseInfoContainer: {
    width: Metrics.screenWidth * 0.9,
    alignSelf: 'center',
  },

  courseSummaryTitle: {
    fontSize: 20,
  },

  courseStats: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },

  courseInfoLabel: {
    fontSize: 20,
    marginBottom: 10,
  },

  courseStatInfo: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  courseSummaryText: {
    marginVertical: 10,
  },
});