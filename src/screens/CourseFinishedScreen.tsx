import React from 'react';
import { View, Text } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { BaseComponent, Container } from '@/components';
import styles from './styles/CourseFinishedScreenStyles';

export interface Props {
	navigation?: NavigationStackProp;
}

export interface State {}

class CourseFinishedScreen extends BaseComponent<Props, State> {
  render() {
    return (
      <Container navigation={this.props.navigation} onBackPress={() => this.props.navigation.navigate('Home')} headerBackButton={true} style={styles.container}>
        <Text>{this.trs('course.finished.thanks')}</Text>
      </Container>
    );
  }
}

export default CourseFinishedScreen;
