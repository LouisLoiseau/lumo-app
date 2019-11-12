import React from 'react';
import { View, Text } from 'react-native';
import { Container, Button, Scanner, CodeInput, BaseComponent } from '@/components';
import styles from './styles/HomeScreenStyles';
import * as Permissions from 'expo-permissions';
import { NavigationStackProp } from 'react-navigation-stack';

export interface State {
	code: string;
	isScannerVisible: boolean;
}

export interface Props {
	navigation?: NavigationStackProp;
}

class HomeScreen extends BaseComponent<Props, State> {
	
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			isScannerVisible: false,
		};
	}

	getPermissions = () => {
		Permissions.askAsync(Permissions.CAMERA).then(response => {
			if (response.status === "granted") {
				this.setState({ isScannerVisible: true });
			}
		});
	}

	handleQrCodeScan = ({ type, data }) => {
		let code = data.split('?code=')[1];
		this.setState({ isScannerVisible: false, code });
	}

	handleValueChange = (value: string) => {
		this.setState({ code: value });
	}

	render() {
		return (
			<Container navigation={this.props.navigation} headerBackButton={false}>
				<Button onPress={this.getPermissions}>
					<Text>{"Scanner un qrcode"}</Text>
				</Button>
				{this.state.isScannerVisible === true &&
					<Scanner onScanEnd={this.handleQrCodeScan} onBackPress={() => {
						this.setState({ isScannerVisible: false });
						return true; // Important!
					}}/>
				}
				<Text>{this.state.code}</Text>
				<View style={styles.container}>
					<CodeInput codeLength={6} onValueChange={this.handleValueChange}/>
				</View>
			</Container>
		);
	}
}

export default HomeScreen;
