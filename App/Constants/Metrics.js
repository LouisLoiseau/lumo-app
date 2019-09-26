import { Dimensions, Platform, StatusBar } from 'react-native';

const { width, height } = Dimensions.get('window');
const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;


const Metrics = {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  statusBarHeight : Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
};

export default Metrics;