import React, { ReactElement } from 'react';
import { BackHandler, View, BackHandlerStatic, Text } from 'react-native';
import styles from './styles/ScannerStyles';
import { RNCamera } from 'react-native-camera';
import Button from './Button';

interface Props {
  onScanEnd: (data: object) => void;
  onBackPress: () => void;
}

interface State { }

class Scanner extends React.Component<Props, State> {
  backHandler: BackHandlerStatic | undefined;
  constructor(props: Readonly<Props>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.props.onBackPress);
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  renderCorners = (): ReactElement[] => {
    return [
      <View key={'topLeft'} style={[styles.targetCorner, styles.cornerTopLeft]}></View>,
      <View key={'topRight'} style={[styles.targetCorner, styles.cornerTopRight]}></View>,
      <View key={'bottomLeft'} style={[styles.targetCorner, styles.cornerBottomLeft]}></View>,
      <View key={'bottomRight'} style={[styles.targetCorner, styles.cornerBottomRight]}></View>,
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.props.onBackPress} style={styles.backButton}>
          <Text>{'Retour'}</Text>
        </Button>
        <View style={styles.targetContainer}>
          {this.renderCorners()}
        </View>
        <RNCamera
          onBarCodeRead={this.props.onScanEnd}
          style={styles.scanner}
        />
      </View>
    );
  }
}

export default Scanner;