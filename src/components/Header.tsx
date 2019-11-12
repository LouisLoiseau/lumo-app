import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BaseComponent from './BaseComponent';
import { NavigationStackProp } from 'react-navigation-stack';
import { Scene } from 'react-navigation-stack/lib/typescript/types';

interface Props {
  onMenuPress: () => void;
  title?: string;
}

interface State {

}

class Header extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onMenuPress}>
          <Text>{"Press me plz"}</Text>
        </TouchableOpacity>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

export default Header;
