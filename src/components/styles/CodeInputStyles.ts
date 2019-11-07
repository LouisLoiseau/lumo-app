import { StyleSheet, Platform, StatusBar } from 'react-native';
import { Metrics } from '@/constants';

export default StyleSheet.create({
  wrap: {
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    position: "relative",
    flexDirection: "row",
  },

  input: {
    position: "absolute",
    fontSize: 32,
    textAlign: "center",
    backgroundColor: "transparent",
    width: 32,
    top: 0,
    bottom: 0,
  },

  display: {
    borderRightWidth: 1,
    borderRightColor: "rgba(0, 0, 0, 0.2)",
    width: 32,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    overflow: "visible",
  },

  text: {
    fontSize: 32,
  },

  noBorder: {
    borderRightWidth: 0,
  },

  shadows: {
    position: "absolute",
    left: -4,
    top: -4,
    bottom: -4,
    right: -4,
    borderColor: "rgba(58, 151, 212, 0.28)",
    borderWidth: 4,
  },
});