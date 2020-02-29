import React from 'react';
import { View, Text, Image, ImageBackground, Alert, TouchableOpacity as TouchableOpacityAndroid, Platform } from 'react-native';
import BaseComponent from './BaseComponent';
import Modal from 'react-native-modal';
import styles from './styles/CourseModalStyles';
import { Step, Course } from '@/types/Course';
import Header from './Header';
import { TouchableWithoutFeedback as TouchableWithoutFeedbackIOS, TouchableOpacity as TouchableOpacityIOS } from 'react-native-gesture-handler';
import DialogBox from './DialogBox';

export interface Props {
	isVisible: boolean;
	onBackButtonPress: () => void;
	course: Course;
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
		const { course } = this.props;
		const { currentStepIndex } = this.state;
		if (!course.steps[currentStepIndex + 1] || currentStepIndex === course.steps.length - 1) {
			this.props.onCourseFinished();
			return null;
		}
		this.setState({ currentStepIndex: this.state.currentStepIndex + 1 });
	}

	next = () => {
		const { course } = this.props;
		let currentStep = course.steps[this.state.currentStepIndex];
		if (!currentStep.dialog) return null;
		let currentDialog = currentStep.dialog[this.state.currentStepDialogIndex + 1];
		if (!currentDialog) {
			this.setState({ currentStepDialogIndex: 0 }, this.stepNext);
			return;
		}
		this.setState({ currentStepDialogIndex: this.state.currentStepDialogIndex + 1 });
	}

	checkAnswer = (index: number) => {
		const step = this.props.course.steps[this.state.currentStepIndex];
		if (!step) return null;
		if (step.correct_answer == index) {
			this.stepNext();
		} else {
			Alert.alert('Mauvaise réponse, rééssayez.');
		}
	}

	render() {
		const { isVisible, onBackButtonPress, course } = this.props;
		const { currentStepIndex, currentStepDialogIndex } = this.state;
		let currentStep = course.steps[currentStepIndex] ? course.steps[currentStepIndex] : null;
		if (!currentStep) return null;
		let isDialog = currentStep.dialog !== undefined && currentStep.dialog.length !== 0;
		let isQuestion = currentStep.question !== undefined && currentStep.question !== "";
		let TouchableOpacity = Platform.select({ ios: TouchableOpacityIOS, android: TouchableOpacityAndroid });
		let TouchableWithoutFeedback = Platform.select({ ios: TouchableWithoutFeedbackIOS, android: TouchableOpacityAndroid });
		return (
			<Modal isVisible={isVisible} hasBackdrop={false} onBackButtonPress={onBackButtonPress} style={styles.modalContainer} swipeDirection={'down'}>
				<Header onBackPress={() => {
					if (currentStepIndex === 0) {
						this.props.onBackButtonPress();
					} else {
						this.stepBack(course.steps, currentStepIndex);
					}
				}} headerBackButton={true} title={`${currentStepIndex + 1} / ${course.steps.length}`} />
				<TouchableWithoutFeedback disabled={isQuestion === true} onPress={this.next} style={styles.invisibleNextTouchable} activeOpacity={1}>
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
											<TouchableOpacity key={index} style={styles.stepAnswerItem} onPress={() => this.checkAnswer(index)}>
												<Text>Réponse {index + 1} : {item}</Text>
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
