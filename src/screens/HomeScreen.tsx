import React from 'react';
import { View, Text } from 'react-native';
import { Container, Button, Scanner, CodeInput } from '@/components';
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

class HomeScreen extends React.Component<Props, State> {
	
	constructor(props) {
		super(props);
		this.state = {
			code: '',
			isScannerVisible: false,
		};
	}

	getPermissions() {
		Permissions.askAsync(Permissions.CAMERA).then(response => {
			if (response.status === "granted") {
				this.setState({ isScannerVisible: true });
			}
		});
	}

	handleQrCodeScan({ type, data }) {
		this.setState({ isScannerVisible: false });
		// make api call
	}

	handleValueChange = value => {
		this.setState({ code: value });
	}

	render() {
		return (
			<Container>
				<Button text={"Scanner un QrCode"} onPress={() => this.getPermissions()}/>
				{this.state.isScannerVisible === true &&
					<Scanner onScanEnd={(data: any) => this.handleQrCodeScan(data)}/>
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
