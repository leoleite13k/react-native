import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, ImageBackground, TouchableHighlight } from 'react-native';
import firebase from './FirebaseConn';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorTotal:0
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.login     = this.login.bind(this);

        firebase.database().ref('users').on('value', (snapshot) => {
            let state = this.state;
            state.valorTotal = 0;

            snapshot.forEach((childItem) => {
                state.valorTotal += childItem.val().saldo;
            });

            this.setState(state);
        });
    }

    cadastrar() {
        this.props.navigation.navigate('Cadastro');
    }

    login() {
        this.props.navigation.navigate('Login');
    }
    render() {
        return (
            <ImageBackground style={styles.bg} source={require('../assets/images/fundo.jpg')}>
                <View style={styles.container}>
                    <Text style={styles.texto}>
                        Fluxo de Caixa v1.0
                    </Text>
                    <View style={styles.areaButton}>
                        <TouchableHighlight
                            onPress={this.cadastrar}
                            style={styles.button}
                            underlayColor='#CCCCCC'>
                            <Text style={styles.tButton}>
                                Cadastrar
                            </Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={this.login}
                            style={styles.button}
                            underlayColor='#CCCCCC'>
                            <Text style={styles.tButton}>
                                Login
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <View style={styles.total}>
                        <Text style={styles.tTotal}>
                            No momento estamos administrando
                        </Text>
                        <Text style={styles.tValor}>
                            R$ {this.state.valorTotal}
                        </Text>
                    </View>
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
    },
    areaButton:{
        marginTop: 30,
    },
    button:{
        backgroundColor: '#bfb300',
        margin: 10,
        height: 40,
        width: 200,
        justifyContent: 'center',
    },
    tButton:{
        color: '#FFFFFF',
        textAlign: 'center',
    },
    total:{
        marginTop: 10,
        alignItems: 'center',
    },
    tTotal:{
        fontSize: 13,
    },
    tValor:{
        fontSize: 15,
        fontWeight: 'bold',
    }
});


export default Home;