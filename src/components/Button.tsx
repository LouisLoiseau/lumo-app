import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

export interface Props {
	text: string;
	onPress: () => void;
	style?: ViewStyle;
}

interface State {
	text: string;
}

class Button extends React.Component<Props, State>  {
	constructor(props) {
		super(props);
	}

	render() {
		const { onPress, style, text } = this.props;
		return (
			<TouchableOpacity style={[style && style]} onPress={onPress} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
				<Text>
					{text}
				</Text>
			</TouchableOpacity>
		)
	}
}

export default Button;