import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export interface Props {
	text: string;
	onPress: () => void;
}

interface State {
	text: string;
}

class Button extends React.Component<Props, State>  {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={{}}>
				<TouchableOpacity style={{}} onPress={this.props.onPress}>
					<Text>
						{this.props.text}
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Button;