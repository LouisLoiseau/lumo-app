import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from './BaseComponent';
import { DialogItem } from '@/types/Course';
import styles from './styles/DialogBoxStyles';

export interface Props {
	dialog?: DialogItem;
}

export interface State { }

class DialogBox extends BaseComponent<Props, State> {
	render() {
		return (
			<View style={styles.stepDialog}>
				<View style={styles.stepDialogSpeaker}>
					<Text style={styles.stepDialogSpeakerText}>{this.props.dialog.speaker}</Text>
				</View>
				<View style={styles.stepDialogSentence}>
					<Text>{this.props.dialog.sentence}</Text>
				</View>
			</View>
		);
	}
}

export default DialogBox;
