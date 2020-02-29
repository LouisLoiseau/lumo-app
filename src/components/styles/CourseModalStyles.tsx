import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  modalContainer: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginTop: Platform.select({ ios: Metrics.statusBarHeight, android: 0 }),
  },

  invisibleNextTouchable: {
    width: Metrics.screenWidth,
    height: Metrics.realHeight,
  },

  modalContent: {
    // width: Metrics.screenWidth,
    // height: Metrics.realHeight,
  },

  stepImageSpeaker: {
    position: 'absolute',
  },

  stepImageBg:{
    width: '100%',
    height: '100%',
    zIndex: 0,
  },

  bgDark: {
    ...StyleSheet.absoluteFill,
    width: '100%',
    height: '100%',
    zIndex: 1,
    backgroundColor: 'rgba(71, 61, 61, 0.35)',
  },

  bgDarker: {
    backgroundColor: 'rgba(71, 61, 61, 0.7)',
  },

  stepQuestion: {
    width: 310,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    zIndex: 2,
    marginTop: 50,
    alignSelf: 'center',
  },

  stepQuestionAvatar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  imgAvatar: {
    width: Metrics.screenWidth * 0.175,
    height: Metrics.screenWidth * 0.175,
    marginRight: 10,
  },

  textAvatar: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  stepQuestionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 20,
    width: 310,
  },

  stepAnswersList: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  stepAnswerItem: {
    width: 310,
    height: 83,
    backgroundColor: '#fff',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    zIndex: 99
  },
});