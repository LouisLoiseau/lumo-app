import React from 'react';
import { StyleProp, SafeAreaView, ViewStyle } from 'react-native';
import styles from './styles/ContainerStyles';
import BaseComponent from './BaseComponent';
import Header from './Header';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props { 
  style?: StyleProp<ViewStyle>;
  navigation?: NavigationStackProp;
  headerBackButton?: boolean;
}

interface State { }

class Container extends BaseComponent<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header headerBackButton={this.props.headerBackButton} title={this.trs(this.props.navigation.state.params.title)} onMenuPress={this.props.navigation.toggleDrawer} onBackPress={this.props.navigation.goBack}/>
        {this.props.children && this.props.children}
      </SafeAreaView>
    );
  }
}

export default Container;