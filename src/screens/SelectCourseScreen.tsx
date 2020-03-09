import React from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { BaseComponent, Container, CourseListItem } from '@/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { Course } from '@/types/Course';
import styles from './styles/SelectCourseScreenStyles';
import { CourseStackNavigatorParams } from '@/navigation/CourseStackNavigator';

interface Props {
  navigation?: StackNavigationProp<CourseStackNavigatorParams, 'SelectCourse'>;
}

interface State {
  coursesList?: Course[];
}

class SelectCourseScreen extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      coursesList: [
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        },
        {
          name: 'Billy Jones, le retour',
          bgPicture: '@/assets/images/musee_orsay_hall.png',
          numberOfSteps: 8,
          steps: [],
          duration: 30,
          difficulty: 'low',
          summary: 'Nice job',
        }
      ]
    };
  }

  renderCourseItem = ({ item, index }) => <CourseListItem course={item} onItemPress={() => this.props.navigation.navigate('CourseSummary', { course: item })} />

  render() {
    const { navigation } = this.props;
    const { coursesList } = this.state;
    return (
      <Container navigation={navigation}>
        <ScrollView contentContainerStyle={styles.contentScrollView}>
          <View style={styles.bgImageContainer}>
            <Text style={styles.bgImageTextOverlay}>{this.trs('common.selectCourse.welcomeMessage')}</Text>
            <View style={styles.bgImageOverlay} />
            <Image
              source={require('@/assets/images/musee_orsay_hall.png')}
              style={styles.bgImage}
              resizeMode={'cover'} />
          </View>
          <Text style={styles.pageTitle}>{this.trs('common.selectCourse.listTitle')}</Text>
          <FlatList
            scrollEnabled={false}
            style={styles.coursesList}
            contentContainerStyle={styles.coursesListContent}
            data={coursesList}
            renderItem={this.renderCourseItem}
            columnWrapperStyle={styles.coursesListColumn}
            numColumns={2} 
            keyExtractor={(item, index) => index.toString()}/>
        </ScrollView>
      </Container>
    );
  }
}

export default SelectCourseScreen;
