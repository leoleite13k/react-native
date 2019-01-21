import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import firebase from './FirebaseConn';

class Preload extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate('Caixa');
            } else {
                this.props.navigation.navigate('Home');
            }
        })
    }

    render() {
        return (
            <ImageBackground style={styles.bg} source={require('../assets/images/fundo.jpg')}>
                <View style={styles.container}>
                    <Text style={styles.texto}>
                        Fluxo de Caixa
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bg:{
        flex: 1,
        width: null,
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        fontSize: 30,
        backgroundColor: 'transparent',
        fontWeight: '300',
    }
});


export default Preload;