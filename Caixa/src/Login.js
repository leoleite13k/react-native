import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from './FirebaseConn';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            senha:'',
        };

        this.login = this.login.bind(this);

        firebase.auth().signOut();
    }

    login() {
        if (this.state.email != '' &&
            this.state.senha != '') {

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.props.navigation.navigate('Caixa');
                }
            });

            firebase.auth().signInWithEmailAndPassword(
                this.state.email,
                this.state.senha
            ).catch((error) => {
                alert(error.code);
            });

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    E-mail
                </Text>
                <TextInput style={styles.input} autoFocus={true} onChangeText={(email) => this.setState({email})} />
                <Text style={styles.texto}>
                    Senha
                </Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senha) => this.setState({senha})} />
                <Button title="Login" onPress={this.login} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 10,
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        padding: 5,
        marginBottom: 10,
    },
});


export default Login;