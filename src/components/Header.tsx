import React from 'react';
import { View, Text, Image } from 'react-native';
import BaseComponent from './BaseComponent';
import styles from './styles/HeaderStyles';
import Button from './Button';
import { Icons } from '@/constants';

interface Props {
  onMenuPress?: () => void;
  onBackPress?: () => void;
  title?: string;
  headerBackButton?: boolean;
}

interface State {

}

class Header extends BaseComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onMenuPress, onBackPress, title, headerBackButton } = this.props;
    return (
      <View style={styles.header}>
        <View style={styles.headerPart}>
          {onMenuPress &&
            <Button onPress={onMenuPress} style={[styles.headerButton, styles.headerButtonLeft]}>
              <Image source={Icons.header_menu} style={styles.headerImage} />
            </Button>
          }
          {(onBackPress && headerBackButton) === true &&
            <Button onPress={onBackPress} style={[styles.headerButton, styles.headerButtonLeft]}>
              <Text>Menu</Text>
            </Button>
          }
        </View>
        <View style={styles.headerPart}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
        <View style={styles.headerPart}>
          <Button otherProps={{
            disabled: true
          }} onPress={() => {}} style={[styles.headerButton, styles.headerButtonRight]}>
            <Image source={Icons.header_logo} style={styles.headerImage} />
          </Button>
        </View>
      </View>
    );
  }
}

export default Header;
