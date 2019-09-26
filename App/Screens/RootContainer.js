import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Router from '@/Navigation/index';
import Styles from './Styles/RootContainerStyles';

class RootContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={Styles.container}>
        <Router screenProps={{}}/>
      </SafeAreaView>
    )
  }
}

export default RootContainer;
