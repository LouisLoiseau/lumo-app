import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Container, Button, Scanner } from '@/components';
import styles from './styles/HomeScreenStyles';
import * as Permissions from 'expo-permissions';
import { NavigationStackProp } from 'react-navigation-stack';

interface Props {
	navigation?: NavigationStackProp;
}

interface State {
	isScannerVisible: Boolean;
}
class HomeScreen extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
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

	render() {
		return (
			<Container>
				<Button text={"Scanner un QrCode"} onPress={() => this.getPermissions()}/>
				{this.state.isScannerVisible === true &&
					<Scanner onScanEnd={(data: any) => this.handleQrCodeScan(data)}/>
				}
			</Container>
		)
	}
}

export default HomeScreen;
