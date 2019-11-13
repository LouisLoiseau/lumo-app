import React from 'react';
import { View, Text, Image, ImageBackground, Alert } from 'react-native';
import BaseComponent from './BaseComponent';
import Modal from 'react-native-modal';
import styles from './styles/CourseModalStyles';
import { Step, Course, DialogItem } from '@/types/Course';
import Header from './Header';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import DialogBox from './DialogBox';

export interface Props {
	isVisible: boolean;
	onBackButtonPress: () => void;
	course?: Course;
	steps: Step[];
	onCourseFinished: () => void;
}

export interface State {
	currentStepIndex: number;
	currentStepDialogIndex: number;
}

class CourseModal extends BaseComponent<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			currentStepIndex: 0,
			currentStepDialogIndex: 0,
		};
	}
	
	stepBack = (steps: Step[], currentStepIndex: number) => {
		if (currentStepIndex == 0) return null;
		if (!steps[currentStepIndex - 1]) return null;
		this.setState({ currentStepIndex: this.state.currentStepIndex - 1 });
	}

	stepNext = () => {
		const { steps } = this.props;
		const { currentStepIndex } = this.state;
		if (!steps[currentStepIndex + 1] || currentStepIndex === steps.length - 1) {
			this.props.onCourseFinished();
			return null;
		}
		this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
	}

	next = () => {
		const { steps } = this.props;
		let currentStep = steps[this.state.currentStepIndex];
		if (!currentStep.dialog) return null;
		let currentDialog = currentStep.dialog[this.state.currentStepDialogIndex + 1];
		if (!currentDialog) {
			this.setState({ currentStepDialogIndex: 0 }, this.stepNext);
			return;
		}
		this.setState({ currentStepDialogIndex: this.state.currentStepDialogIndex + 1 });
	}

	checkAnswer = (index: number) => {
		const step = this.props.steps[this.state.currentStepIndex];
		if (!step) return null;
		if (step.correct_answer == index) {
			this.stepNext();
		} else {
			Alert.alert('Mauvaise réponse, rééssayez.');
		}
	}

	render() {
		const { isVisible, onBackButtonPress, course, steps } = this.props;
		const { currentStepIndex, currentStepDialogIndex } = this.state;
		let currentStep = steps[currentStepIndex] ? steps[currentStepIndex] : null;
		if (!currentStep) return null;
		let isDialog = currentStep.dialog !== undefined && currentStep.dialog.length !== 0;
		let isQuestion = currentStep.question !== undefined && currentStep.question !== "";
		return (
			<Modal isVisible={isVisible} hasBackdrop={false} onBackButtonPress={onBackButtonPress} style={styles.modalContainer} swipeDirection={'down'}>
				<Header onBackPress={() => this.stepBack(steps, currentStepIndex)} headerBackButton={true} title={`${currentStepIndex + 1} / ${steps.length}`} />
				<TouchableWithoutFeedback disabled={isQuestion === true} onPress={this.next} style={styles.invisibleNextTouchable}>
				<ImageBackground source={require("../assets/images/musee_orsay_hall.png")} style={styles.stepImageBg}>
					<View style={[styles.bgDark, isQuestion === true && styles.bgDarker]} />
					{currentStep.picture.url !== "" && <Image source={require('../assets/images/sapho_james_pradier.png')} style={styles.stepImageSpeaker} />}
					{isDialog === true && currentStep.dialog[currentStepDialogIndex] &&
						<DialogBox dialog={currentStep.dialog[currentStepDialogIndex]} />
					}
					{isQuestion &&
						<View style={styles.stepQuestion}>
							<View style={styles.stepQuestionAvatar}>
								<Image source={require('../assets/images/avatar.png')} style={styles.imgAvatar} />
								<Text style={styles.textAvatar}>{"Samothrace"} :</Text>
							</View>
							<Text style={styles.stepQuestionText}>{currentStep.question}</Text>
							<View style={styles.stepAnswersList}>
								{currentStep.answers.map((item, index) => {
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
			</Modal>
		);
	}
}

export default CourseModal;
