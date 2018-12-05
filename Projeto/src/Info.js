import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';

class Info extends Component{
    render() {

        let nome = 'Leonardo Leite';

        return (
            <View style={styles.container}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    }
});

export default Info;