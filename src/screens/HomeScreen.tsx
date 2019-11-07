import React from 'react';
import { Text, View } from 'react-native';
import { Container, CodeInput } from '@/components';
import styles from './styles/HomeScreenStyles';
import { NavigationStackProp } from 'react-navigation-stack';

export interface State {
	code: string;
}

export interface Props {
	navigation?: NavigationStackProp;
}

class HomeScreen extends React.Component<Props, State> {
	
	constructor(props) {
		super(props);
		this.state = {
			code: ''
		};
	}

	handleValueChange = value => {
		this.setState({ code: value });
	}

	render() {
		return (
			<Container>
				<Text>{this.state.code}</Text>
				<View style={styles.container}>
					<CodeInput codeLength={6} onValueChange={this.handleValueChange}/>
				</View>
			</Container>
		);
	}
}

export default HomeScreen;
