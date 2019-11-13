import React from 'react';
import { View, Text } from 'react-native';
import { Container, BaseComponent, Button, CourseModal } from '@/components';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './styles/CurrentCourseScreenStyles';
const BILLY_JONES = require('@/ressources/billyJonesCourse');
import { Step } from '@/types/Course';

export interface State {
	modalVisible: boolean;
	steps: Step[];
}

export interface Props {
	navigation?: NavigationStackProp;
}

class CurrentCourseScreen extends BaseComponent<Props, State> {
	
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			steps: [],
		};
	}

	componentDidMount() {
		let steps: Step[] = BILLY_JONES.steps;
		this.setState({ steps });
	}

	toggleModal = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

	startCourse = () => {
		this.toggleModal();
	}

	onCourseFinished = () => {
		this.toggleModal();
		this.props.navigation.navigate('CourseFinished');
	}

	render() {
		const { modalVisible } = this.state;
		return (
			<Container navigation={this.props.navigation} style={styles.container}>
				<CourseModal
					isVisible={modalVisible}
					onBackButtonPress={this.toggleModal}
					steps={this.state.steps} 
					onCourseFinished={this.onCourseFinished} />
				<Button onPress={this.startCourse} style={styles.startCourseButton}>
					<Text style={styles.startCourseButtonText}>{this.trs('routes.coursesList.start_course')}</Text>
				</Button>
			</Container>
		);
	}
}

export default CurrentCourseScreen;
