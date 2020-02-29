import { Metrics, Colors } from '@/constants';
import { ThemedStyleSheet } from '@/components';

export default ThemedStyleSheet.create({
  default: {
    container: {
      width: Metrics.screenWidth,
      height: Metrics.realHeight,
      alignItems: "center",
      justifyContent: "center",
    },

    title: {
      color: '#000',
      fontSize: 28,
      fontWeight: 'bold',
    },
  },

  dark: {
    container: {
      backgroundColor: '#000',
    },
    title: {
      color: '#fff',
    },
  },
});