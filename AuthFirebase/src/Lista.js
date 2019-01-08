import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';

class Lista extends Component {
    render() {
        return (
            <View>
                <Text>...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS == 'ios'? 30 : 0,
    }
});


export default Lista;