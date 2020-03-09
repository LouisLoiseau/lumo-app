import React from 'react';
import { View, Text, Slider } from 'react-native';
import { Dispatch } from 'redux';
import { Container, BaseComponent } from '@/components';
import { StackNavigationProp } from '@react-navigation/stack';
import { InternalStoreType } from '@/types/Store';
import styles from './styles/SettingsScreenStyles';
import { connect } from 'react-redux';
import { THEMES, Colors } from '@/constants';
import { Switch } from 'react-native-switch';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigatorParams } from '@/navigation/StackNavigator';

interface Props {
  navigation?: StackNavigationProp<RootStackNavigatorParams, 'Settings'>;
  dispatch?: Dispatch;
  store: InternalStoreType;
}

interface State {
  theme: string;
}

class SettingsScreen extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      theme: '',
    };
  }

  toggleDarkMode = val => {
    let theme: string = val === true ? THEMES.THEME_DARK : 'default';
    this.props.dispatch({ type: 'SET_THEME', data: theme });
    this.setState({ theme });
  }

  toggleColorBlindMode = val => {
    let theme: string = val === true ? THEMES.THEME_COLORBLIND : 'default';
    this.props.dispatch({ type: 'SET_THEME', data: theme });
    this.setState({ theme });
  }

  render() {
    return (
      <Container navigation={this.props.navigation}>
        <Switch
          value={this.state.theme === THEMES.THEME_DARK}
          onValueChange={this.toggleDarkMode}
          backgroundActive={Colors.darkModeTrackColors.active}
          backgroundInactive={Colors.darkModeTrackColors.inactive}
          circleActiveColor={Colors.darkModeSwitchThumbColors.active}
          circleInActiveColor={Colors.darkModeSwitchThumbColors.inactive}
          containerStyle={styles.switchBorder} // not working
        />
        {/* <Switch
          onValueChange={this.toggleColorBlindMode}
          value={this.state.theme === THEMES.THEME_COLORBLIND}
        /> */}
        <Text style={styles[this.props.store.theme].text}>hey</Text>
      </Container>
    );
  }
}

let mapStateToProps = store => {
  return { store };
};

export default connect(mapStateToProps)(SettingsScreen);
