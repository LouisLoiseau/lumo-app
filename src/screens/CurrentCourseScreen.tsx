import React from 'react';
import { View } from 'react-native';
import { BaseComponent, CourseModal } from '@/components';
import styles from './styles/CurrentCourseScreenStyles';
import { connect } from 'react-redux';
import { InternalStoreType } from '@/types/Store';
import { Dispatch } from 'redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { CourseStackNavigatorParams } from '@/navigation/CourseStackNavigator';

export interface State {
	modalVisible: boolean;
}

export interface Props {
	navigation?: StackNavigationProp<CourseStackNavigatorParams, 'CurrentCourse'>;
	store: InternalStoreType;
	dispatch: Dispatch;
}

class CurrentCourseScreen extends BaseComponent<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: true,
		};
	}

	componentDidMount() {
		this.props.navigation.addListener('didFocus', () => {
			if (this.props.store.course && this.state.modalVisible !== true) {
				this.setState({ modalVisible: true });
			}
		});
	}

	onCourseFinished = () => {
		this.props.navigation.navigate('CourseFinished');
	}

	render() {
		const { modalVisible } = this.state;
		const { course } = this.props.store;
		return (
			<View>
				{course &&
					<CourseModal
						isVisible={modalVisible}
						onBackButtonPress={() => this.setState({ modalVisible: false }, this.props.navigation.goBack)}
						course={course}
						onCourseFinished={this.onCourseFinished} />
				}
			</View>
		);
	}
}

const mapStateToProps = store => {
	return { store }
};

export default connect(mapStateToProps)(CurrentCourseScreen);
