import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { BaseComponent } from '.';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
  navigation?: NavigationStackProp;
}

interface State {

}

class DrawerButton extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.navigation.toggleDrawer}>
        <Text>Menu</Text>
      </TouchableOpacity>
    );
  }
}

export default DrawerButton;