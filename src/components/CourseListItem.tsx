import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import BaseComponent from './BaseComponent';
import { Course } from '@/types/Course';
import styles from './styles/CourseListItemStyles';

interface Props {
  course: Course;
  onItemPress: () => void;
}

interface State {

}

class CourseListItem extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const { course, onItemPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onItemPress}>
        <Image
          source={require('@/assets/images/musee_orsay_hall.png')}
          style={styles.bgImage} />
        <View style={styles.nameView}>
          <Text style={styles.nameText}>{course.name}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default CourseListItem;
