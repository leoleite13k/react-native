import React, {Component} from 'react';
import {View, StyleSheet, Text,Platform} from 'react-native';

class HomeList extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text>Testando</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    },
    icon:{
        width: 26,
        height: 26,
    }
});

export default HomeList;