import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  header: {
    width: Metrics.screenWidth,
    height: Metrics.screenHeight * 0.075,
    backgroundColor: '#fff',
    paddingHorizontal: Metrics.screenWidth * 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey',
  },

  headerImage: {
    // width: Metrics.screenHeight * 0.025,
    // height: Metrics.screenHeight * 0.025,
  },

  headerPart: {
    width: '33%',
    height: '100%',
    maxWidth: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerButtonLeft: {
    alignItems: 'flex-start',
  },

  headerButtonRight: {
    alignItems: 'flex-end',
  },

  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});