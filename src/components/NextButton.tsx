import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BaseComponent from './BaseComponent';
import styles from './styles/NextButtonStyles';

interface Props {
  onPress: () => void;
  mode: string;
  visible: boolean;
}



interface State {

}

class NextButton extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.visible === false) return null;
    return (
      <TouchableOpacity onPress={this.props.onPress} style={[styles.container, this.props.mode === 'light' && styles.containerLight]} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
        <Text style={[styles.buttonTextDark, this.props.mode === 'light' && styles.buttonTextLight]}>{this.trs('course.nextButton.label')} ></Text>
      </TouchableOpacity>
    );
  }
}

export default NextButton;
