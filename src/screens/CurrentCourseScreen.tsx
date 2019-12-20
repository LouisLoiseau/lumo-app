import React from 'react';
import { Text } from 'react-native';
import { Container, BaseComponent, Button, CourseModal } from '@/components';
import { NavigationStackProp } from 'react-navigation-stack';
import styles from './styles/CurrentCourseScreenStyles';
import { connect } from 'react-redux';
import { InternalStoreType } from '@/types/Store';
import { Dispatch } from 'redux';

export interface State {
	modalVisible: boolean;
}

export interface Props {
	navigation?: NavigationStackProp;
	store: InternalStoreType;
	dispatch: Dispatch;
}

class CurrentCourseScreen extends BaseComponent<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
		};
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
		const { modalVisible } = this.state;
		const { course } = this.props.store;
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
					disabled: course === undefined && course === null
				}}>
					<Text style={styles.startCourseButtonText}>{this.trs('routes.coursesList.start_course')}</Text>
				</Button>
			</Container>
		);
	}
}

const mapStateToProps = store => {
	return { store }
};

export default connect(mapStateToProps)(CurrentCourseScreen);
