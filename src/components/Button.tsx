import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

export interface Props {
	text: string;
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
				<TouchableOpacity style={{}}>
					<Text>
						{this.props.text}
					</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

export default Button;