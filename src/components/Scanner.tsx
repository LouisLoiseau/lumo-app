import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles/ScannerStyles';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props {
  onScanEnd: (data: object) => void;
}

interface State {  }

class Scanner extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <BarCodeScanner
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.QrCode]}
          onBarCodeScanned={this.props.onScanEnd}
          style={styles.scanner}
        />
      </View>
    );
  }
}

export default Scanner;