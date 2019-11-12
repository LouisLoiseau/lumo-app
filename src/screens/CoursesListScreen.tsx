import React from 'react';
import { Text } from 'react-native';
import { Container, BaseComponent } from '@/components';
import { NavigationStackProp } from 'react-navigation-stack';

export interface State { }

export interface Props {
	navigation?: NavigationStackProp;
}

class CoursesListScreen extends BaseComponent<Props, State> {
	
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container navigation={this.props.navigation}>
				<Text>{this.trs('routes.coursesList.title')}</Text>
			</Container>
		);
	}
}

export default CoursesListScreen;
