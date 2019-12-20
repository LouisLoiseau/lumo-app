import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Container, Button, Scanner, CodeInput, BaseComponent } from '@/components';
import styles from './styles/HomeScreenStyles';
import * as Permissions from 'expo-permissions';
import { NavigationStackProp } from 'react-navigation-stack';
import { api } from '@/lib';

export interface State {
	code: string;
	isScannerVisible: boolean;
	codeInputVisible: boolean;
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
			codeInputVisible: false,
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
		this.setState({ code: value }, () => {
			if (this.state.code.length === 6) {
				api.get(`/course/${this.state.code}/get_course_by_code`).then(response => {
					Alert.alert('Success')
				}).catch(({ response }) => {
					Alert.alert(response.data.message);
				});
			}
		});
	}

	showCodeInput = () => {
		this.setState({ codeInputVisible: true });
	}

	render() {
		// changer les doubles conditions (mises car le texte passait au dessus du scanner)
		return (
			<Container navigation={this.props.navigation} headerBackButton={false} style={styles.container}>
				<Button onPress={this.getPermissions}>
					<Text style={styles.title}>{this.trs('home.qrCode.scan')}</Text>
				</Button>
				{this.state.isScannerVisible === true &&
					<Scanner onScanEnd={this.handleQrCodeScan} onBackPress={() => {
						this.setState({ isScannerVisible: false });
						return true; // Important!
					}} />
				}
				{this.state.codeInputVisible === false && this.state.isScannerVisible === false &&
					<Button onPress={this.showCodeInput}>
						<Text style={styles.title}>{this.trs('home.codeInput.show')}</Text>
					</Button>
				}
				{this.state.codeInputVisible === true && this.state.isScannerVisible === false &&
					<View>
						<CodeInput codeLength={6} onValueChange={this.handleValueChange} />
					</View>
				}
			</Container>
		);
	}
}

export default HomeScreen;
