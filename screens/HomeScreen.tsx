import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ButtonCode from "../component/ButtonCode";

export class HomeScreen extends Component {
    render() {
        return (
            <View>
                <ButtonCode text="scanner un QR code"/>
                <ButtonCode text="entrer un code"/>
            </View>
        )
    }
}

export default HomeScreen;
