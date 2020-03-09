import React from 'react';
import { StyleProp, SafeAreaView, ViewStyle, View } from 'react-native';
import styles from './styles/ContainerStyles';
import Header from './Header';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigatorParams } from '@/navigation/StackNavigator';
import { DrawerNavigationProp, DrawerContentComponentProps } from '@react-navigation/drawer';

interface Props { 
  style?: StyleProp<ViewStyle>;
  navigation?: DrawerNavigationProp<DrawerContentComponentProps, any>;
  headerBackButton?: boolean;
  onBackPress?: () => void;
}

interface State { }

class Container extends React.Component<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header
          headerBackButton={this.props.headerBackButton}
          onMenuPress={this.props.navigation?.toggleDrawer}
          onBackPress={this.props.onBackPress ? this.props.onBackPress : this.props.navigation.goBack} />
        <View style={[styles.main, this.props.style && this.props.style]}>
          {this.props.children && this.props.children}
        </View>
      </SafeAreaView>
    );
  }
}

export default Container;
