import React from 'react';
import { Text, TouchableOpacity, ViewStyle, TouchableOpacityProps } from 'react-native';
import styles from './styles/ButtonStyles';

export interface Props {
	onPress: () => void;
	style?: ViewStyle;
	otherProps?: TouchableOpacityProps;
}

interface State {
}

class Button extends React.Component<Props, State>  {
	constructor(props) {
		super(props);
	}

	render() {
		const { onPress, style, otherProps } = this.props;
		return (
			<TouchableOpacity style={[styles.buttonContainer, style && style]} onPress={onPress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }} {...otherProps}>
				{this.props.children && this.props.children}
			</TouchableOpacity>
		)
	}
}

export default Button;