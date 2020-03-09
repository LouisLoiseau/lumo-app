import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { BaseComponent, Container } from '@/components';
import styles from './styles/CourseSummaryScreenStyles';
import { uti } from '@/lib';
import { StackNavigationProp } from '@react-navigation/stack';
import { CourseStackNavigatorParams } from '@/navigation/CourseStackNavigator';

export interface Props {
  navigation?: StackNavigationProp<CourseStackNavigatorParams, 'CourseSummary'>;
}

export interface State { }

class CourseSummaryScreen extends BaseComponent<Props, State> {

  onContinueButtonPress = () => this.props.navigation.navigate('CurrentCourse');

  render() {
    const { course } = this.props.navigation.state.params;
    return (
      <Container navigation={this.props.navigation}>
        <View style={styles.bgImageContainer}>
          <View style={styles.bgImageOverlay} />
          <Image
            source={require('@/assets/images/musee_orsay_hall.png')}
            style={styles.bgImage}
            resizeMode={'cover'} />
          <View style={styles.courseNameOverlay}>
            <Text style={styles.courseNameText}>{course.name}</Text>
          </View>
        </View>
        <View style={styles.courseInfoContainer}>
          {course.summary &&
            <View>
              <Text style={styles.courseSummaryTitle}>{this.trs('common.courseSummary.summary')}</Text>
              <Text style={styles.courseSummaryText}>{course.summary}</Text>
            </View>
          }
          <View style={styles.courseStats}>
            <View style={styles.courseStatInfo}>
              <Text style={styles.courseInfoLabel}>{this.trs(`routes.courseSummary.durationLabel`)}</Text>
              <Text>{uti.formatDuration(course.duration)}</Text>
            </View>
            <View style={styles.courseStatInfo}>
              <Text style={styles.courseInfoLabel}>{this.trs(`routes.courseSummary.difficultyLabel`)}</Text>
              <Text>{this.trs(`course.utils.difficulties.${course.difficulty}`)}</Text>
            </View>
          </View>
          <TouchableOpacity onPress={this.onContinueButtonPress} style={styles.startButton}>
            <Text style={styles.startButtonText}>{this.trs('routes.courseSummary.startButtonLabel')}</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default CourseSummaryScreen;
