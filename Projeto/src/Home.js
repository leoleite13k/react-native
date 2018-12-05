import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

class Home extends Component{
    render() {

        let nome = 'Leonardo Leite';

        return (
            <View style={styles.container}>
                <Text>Meu nome é {nome}</Text>
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

export default Home;