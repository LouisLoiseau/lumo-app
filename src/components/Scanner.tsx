import React from 'react';
import { BackHandler, View, BackHandlerStatic } from 'react-native';
import styles from './styles/ScannerStyles';
import { BarCodeScanner } from 'expo-barcode-scanner';

interface Props {
  onScanEnd: (data: object) => void;
  onBackPress: () => void;
}

interface State {  }

class Scanner extends React.Component<Props, State> {
  backHandler: BackHandlerStatic;
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.props.onBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
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