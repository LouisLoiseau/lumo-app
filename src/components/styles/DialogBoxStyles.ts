import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  stepDialog: {
    position: 'absolute',
    bottom: 0,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    width: Metrics.screenWidth * 0.9,
    height: Metrics.realHeight * 0.4,
    backgroundColor: '#fff',
    left: (Metrics.screenWidth - Metrics.screenWidth * 0.9) / 2,
    zIndex: 2,
    paddingLeft: 15,
    paddingTop: ((Metrics.realHeight * 0.3) / 5.5) / 2 + 10,
  },

  stepDialogSpeaker: {
    position: 'absolute',
    top: - ((Metrics.realHeight * 0.3) / 5.5) / 2,
    left: 15,
    width: '65%',
    height: (Metrics.realHeight * 0.3) / 5.5,
    backgroundColor: '#FF6F61',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 15,
  },

  stepDialogSpeakerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },

  stepDialogSentence: {

  },
});