import React from 'react';
import { View, Text } from 'react-native';
import { Container, BaseComponent, Button, CourseModal } from '@/components';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './styles/CurrentCourseScreenStyles';
const BILLY_JONES = require('@/ressources/billyJonesCourse');
import { Step, Course } from '@/types/Course';
import { inject } from 'mobx-react';

export interface State {
	modalVisible: boolean;
	course: Course;
}

export interface Props {
	navigation?: NavigationStackProp;
	store?: any;
}

@inject('store')
class CurrentCourseScreen extends BaseComponent<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			course: null,

		};
	}

	componentDidMount() {
		console.log(this.props.store.course);
	}

	toggleModal = () => {
		this.setState({ modalVisible: !this.state.modalVisible });
	}

	startCourse = () => {
		this.toggleModal();
	}

	onCourseFinished = () => {
		this.toggleModal();
		this.props.navigation.navigate('CourseFinished');
	}

	render() {
		const { modalVisible, course } = this.state;
		return (
			<Container navigation={this.props.navigation} style={styles.container}>
				{course &&
					<CourseModal
						isVisible={modalVisible}
						onBackButtonPress={this.toggleModal}
						course={course}
						onCourseFinished={this.onCourseFinished} />
				}
				<Button onPress={this.startCourse} style={styles.startCourseButton} otherProps={{
					disabled: course !== undefined && course !== null
				}}>
					<Text style={styles.startCourseButtonText}>{this.trs('routes.coursesList.start_course')}</Text>
				</Button>
			</Container>
		);
	}
}

export default CurrentCourseScreen;
