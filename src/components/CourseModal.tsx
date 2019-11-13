import React from 'react';
import { View, Text, Image, ImageBackground, Alert } from 'react-native';
import BaseComponent from './BaseComponent';
import Modal from 'react-native-modal';
import styles from './styles/CourseModalStyles';
import { Step, Course } from '@/types/Course';
import Header from './Header';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';

export interface Props {
	isVisible: boolean;
	onBackButtonPress: () => void;
	course?: Course;
	steps: Step[];
}

export interface State {
	currentStepIndex: number;
}

class CourseModal extends BaseComponent<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			currentStepIndex: 0,
		};
	}

	stepBack = (steps: Step[], currentStepIndex: number) => {
		if (currentStepIndex == 0) return null;
		if (!steps[currentStepIndex - 1]) return null;
		this.setState({ currentStepIndex: this.state.currentStepIndex - 1 });
	}

	stepNext = (steps: Step[], currentStepIndex: number) => {
		if (!steps[currentStepIndex + 1]) return null;
		this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
	}

	checkAnswer = (index: number) => {
		const step = this.props.steps[this.state.currentStepIndex];
		if (!step) return null;
		if (step.correct_answer == index) {
			this.stepNext(this.props.steps, this.state.currentStepIndex);
		} else {
			Alert.alert('Mauvaise réponse, rééssayez.');
		}
	}

	renderCurrentStep = (step: Step) => {
		let isDialog = step.dialog !== undefined && step.dialog.length !== 0;
		let isQuestion = step.question !== undefined && step.question !== "";
		return (
			<TouchableWithoutFeedback disabled={isQuestion === true} onPress={this.next} style={styles.invisibleNextTouchable}>
				<ImageBackground source={require("../assets/images/musee_orsay_hall.png")} style={styles.stepImageBg}>
					<View style={[styles.bgDark, isQuestion === true && styles.bgDarker]} />
					{step.picture.url !== "" && <Image source={require('../assets/images/sapho_james_pradier.png')} style={styles.stepImageSpeaker} />}
					{isDialog === true &&
						<View style={styles.stepDialog}>
							<View style={styles.stepDialogSpeaker}>
								<Text style={styles.stepDialogSpeakerText}>{"Billy Jones"}</Text>
							</View>
							<View style={styles.stepDialogSentence}>
								<Text>{step.dialog ? step.dialog[0].sentence : ""}</Text>
							</View>
						</View>
					}
					{isQuestion &&
						<View style={styles.stepQuestion}>
							<View style={styles.stepQuestionAvatar}>
								<Image source={require('../assets/images/avatar.png')} style={styles.imgAvatar} />
								<Text style={styles.textAvatar}>{"Samothrace"} :</Text>
							</View>
							<Text style={styles.stepQuestionText}>{step.question}</Text>
							<View style={styles.stepAnswersList}>
								{step.answers.map((item, index) => {
									return (
										<TouchableOpacity style={styles.stepAnswerItem} onPress={() => this.checkAnswer(index)}>
											<Text>Réponse {index +1} : {item}</Text>
										</TouchableOpacity>
									);
								})}
							</View>
						</View>
					}
				</ImageBackground>
			</TouchableWithoutFeedback>
		);
	}

	next = () => {
		console.warn('Next pressed');
	}

	render() {
		const { isVisible, onBackButtonPress, course, steps } = this.props;
		const { currentStepIndex } = this.state;
		let currentStep = steps[currentStepIndex] ? steps[currentStepIndex] : null;
		if (!currentStep) return null;
		return (
			<Modal isVisible={isVisible} hasBackdrop={false} onBackButtonPress={onBackButtonPress} style={styles.modalContainer} swipeDirection={'down'}>
				<Header onBackPress={() => this.stepBack(steps, currentStepIndex)} headerBackButton={true} title={`${currentStepIndex + 1} / ${steps.length}`} />
				{this.renderCurrentStep(currentStep)}
			</Modal>
		);
	}
}

export default CourseModal;
