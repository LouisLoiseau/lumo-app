import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export interface Props {
    text: string;
}

interface State {
    text: string;
}

class ButtonCode extends Component <Props, State>  {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ButtonCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    }
})