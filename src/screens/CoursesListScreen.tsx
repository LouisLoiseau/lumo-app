import React from 'react';
import { Text } from 'react-native';
import { Container, BaseComponent, DrawerButton } from '@/components';
import { NavigationStackProp } from 'react-navigation-stack';

export interface State { }

export interface Props {
	navigation?: NavigationStackProp;
}

class CoursesListScreen extends BaseComponent<Props, State> {
	static navigationOptions = ({ navigation }) => ({
		headerLeft: <DrawerButton navigation={navigation} />
	});

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<Container>
				<Text>{this.trs('routes.coursesList.title')}</Text>
			</Container>
		);
	}
}

export default CoursesListScreen;
