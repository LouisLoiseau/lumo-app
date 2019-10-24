import React from 'react';
import { StyleProp, SafeAreaView, ViewStyle } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './styles/ContainerStyles';

interface Props { 
  style?: StyleProp<ViewStyle>;
}

interface State { }

class Container extends React.Component<Props, State> {
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