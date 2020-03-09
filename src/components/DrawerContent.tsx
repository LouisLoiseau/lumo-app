import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from './BaseComponent';
import { SafeAreaView } from '@react-navigation/native';
import { DrawerItemType } from '@/types/DrawerItemType';
import styles from './styles/DrawerStyles';
import Button from './Button';
import Header from './Header';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation?: NavigationProp;
  items?: DrawerItemType[];
}

interface State {

}

class DrawerContent extends BaseComponent<Props, State> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header onMenuPress={this.props.navigation.toggleDrawer} />
        <Text style={styles.drawerTitle}>{'Orsay'}</Text>
        <View style={styles.drawerNavContainer}>
          {this.props.items.map(item => {
            return (
              <Button
                key={item.key}
                onPress={() => this.props.navigation.navigate(item.routeName)}
                style={styles.drawerNavButton}>
                <Text style={styles.drawerNavButtonText}>{this.trs(item.params.title)}</Text>
              </Button>
            );
          })}
        </View>

      </SafeAreaView>
    );
  }
}

export default DrawerContent;
