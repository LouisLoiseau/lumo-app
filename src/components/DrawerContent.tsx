import React from 'react';
import { View, Text } from 'react-native';
import BaseComponent from './BaseComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { DrawerItemType } from '@/types/DrawerItemType';
import styles from './styles/DrawerStyles';
import Button from './Button';
import Header from './Header';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigatorParams } from '@/navigation/DrawerNavigator';

interface Props {
	navigation?: DrawerNavigationProp<DrawerNavigatorParams, 'Home'>;
	items?: DrawerItemType[];
}

interface State {}

class DrawerContent extends BaseComponent<Props, State> {
	render() {
		return (
			<SafeAreaProvider>
				<View style={styles.container}>
					<Header onMenuPress={this.props.navigation.toggleDrawer} />
					<Text style={styles.drawerTitle}>{'Orsay'}</Text>
					<View style={styles.drawerNavContainer}>
						{this.props.items.map(item => {
							return (
								<Button
									key={item.key}
									onPress={() => this.props.navigation.navigate(item.routeName)}
									style={styles.drawerNavButton}>
									<Text style={styles.drawerNavButtonText}>
										{this.trs(item.params.title)}
									</Text>
								</Button>
							);
						})}
					</View>
				</View>
			</SafeAreaProvider>
		);
	}
}

export default DrawerContent;
