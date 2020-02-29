import React from 'react';
import { TextInput, View, Text, TextInputProperties, ViewStyle, TouchableWithoutFeedback } from 'react-native';
import styles from './styles/CodeInputStyles';

export interface Props {
  textInputProps?: TextInputProperties;
  codeLength?: number;
  style?: ViewStyle;
  onValueChange: (value) => void;
}

export interface State {
  value: string;
  focused: boolean;
}

class CodeInput extends React.Component<Props, State> {
  private input: React.RefObject<TextInput>;
  CODE: Array<string | number>;
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      focused: false
    };
    this.input = React.createRef();
    this.CODE = new Array(this.props.codeLength | 6).fill(0);
  }

  handleClick = () => {
    this.input.current.focus();
  };

  handleFocus = () => {
    this.setState({ focused: true });
  };

  handleBlur = () => {
    this.setState({
      focused: false,
    });
  };

  handleKeyPress = e => {
    if (e.nativeEvent.key === "Backspace") {
      this.setState(state => {
        this.props.onValueChange(state.value.slice(0, state.value.length - 1));
        return {
          value: state.value.slice(0, state.value.length - 1),
        };
      });
    }
  };

  handleChange = value => {
    this.setState(state => {
      if (state.value.length >= this.CODE.length) return null;
      this.props.onValueChange((state.value + value).slice(0, this.CODE.length));
      return {
        value: (state.value + value).slice(0, this.CODE.length),
      };
    });
  };

  render() {
    const { value, focused } = this.state;
    const { textInputProps, codeLength, style } = this.props;
		const values = value.split("");
		const selectedIndex = values.length < this.CODE.length ? values.length : this.CODE.length - 1;
		const hideInput = !(values.length < this.CODE.length);
    return (
      <TouchableWithoutFeedback onPress={this.handleClick}>
        <View style={styles.wrap}>
          <TextInput
            value=""
            ref={this.input}
            onChangeText={this.handleChange}
            onKeyPress={this.handleKeyPress}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            style={[
              styles.input,
              {
                left: selectedIndex * 32,
                opacity: hideInput ? 0 : 1,
              },
            ]}
            {...textInputProps}
          />
          {this.CODE.map((v, index) => {
            const selected = values.length === index;
            const filled = values.length === this.CODE.length && index === this.CODE.length - 1;
            const removeBorder = index === this.CODE.length - 1 ? styles.noBorder : undefined;

            return (
              <View style={[styles.display, removeBorder]} key={index}>
                <Text style={styles.text}>{values[index] || ""}</Text>
                {(selected || filled) && focused && <View style={styles.shadows} />}
              </View>
            );
          })}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default CodeInput;