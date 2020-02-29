import { StyleSheet, Platform } from 'react-native';
import { Metrics, Colors } from '@/constants';

export const TARGET_SIZE = Metrics.screenWidth * 0.8;

export default StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    top: 0,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight - Metrics.statusBarHeight,
    backgroundColor: '#000',
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scanner: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
  },

  backButton: {
    position: 'absolute',
    top: Metrics.statusBarHeight,
    left: 5,
    zIndex: 1,
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 20,
    padding: 5,
    borderRadius: 5,
    width: Metrics.screenWidth * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  targetContainer: {
    zIndex: 1,
    width: TARGET_SIZE,
    height: TARGET_SIZE,
    position: 'relative',
  },

  targetCorner: {
    position: 'absolute',
    width: TARGET_SIZE / 5,
    height: TARGET_SIZE / 5,
    borderWidth: 2,
  },

  cornerTopLeft: {
    top: 0,
    left: 0,
    borderTopColor: Colors.scannerTargetCornerColor,
    borderLeftColor: Colors.scannerTargetCornerColor,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  cornerTopRight: {
    top: 0,
    right: 0,
    borderTopColor: Colors.scannerTargetCornerColor,
    borderRightColor: Colors.scannerTargetCornerColor,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
  },

  cornerBottomLeft: {
    bottom: 0,
    left: 0,
    borderBottomColor: Colors.scannerTargetCornerColor,
    borderLeftColor: Colors.scannerTargetCornerColor,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
  },

  cornerBottomRight: {
    bottom: 0,
    right: 0,
    borderBottomColor: Colors.scannerTargetCornerColor,
    borderRightColor: Colors.scannerTargetCornerColor,
    borderLeftColor: 'transparent',
    borderTopColor: 'transparent',
  },
});