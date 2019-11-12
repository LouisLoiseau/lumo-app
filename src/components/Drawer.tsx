import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from './BaseComponent';
import { NavigationDrawerProp } from 'react-navigation-drawer';
import { SafeAreaView } from 'react-navigation';
import { DrawerItemType } from '@/types/DrawerItemType';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles/DrawerStyles';

interface Props {
  navigation?: NavigationDrawerProp;
  items?: DrawerItemType[];
}

interface State {

}

class Drawer extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        {this.props.items.map(item => {
          return (
            <TouchableOpacity key={item.key} onPress={() => this.props.navigation.navigate(item.routeName)}>
              <Text>{item.routeName}</Text>
            </TouchableOpacity>
          );
        })}
      </SafeAreaView>
    );
  }
}

export default Drawer;
