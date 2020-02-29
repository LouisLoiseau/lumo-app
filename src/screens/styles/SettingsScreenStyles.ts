import { ThemedStyleSheet } from "@/components";
import { Colors } from '@/constants';

export default ThemedStyleSheet.create({
  default: {
    text: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
    },
    switchBorder: {
      borderColor: Colors.darkModeSwitchBorderColor,
      borderWidth: 1.5,
    },
  },

  dark: {
    text: {
      color: '#fff',
    },
  },
});