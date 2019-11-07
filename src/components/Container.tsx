import React from 'react';
import { StyleProp, SafeAreaView, ViewStyle } from 'react-native';
import styles from './styles/ContainerStyles';
import BaseComponent from './BaseComponent';

interface Props { 
  style?: StyleProp<ViewStyle>;
}

interface State { }

class Container extends BaseComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.children && this.props.children}
      </SafeAreaView>
    );
  }
}

export default Container;