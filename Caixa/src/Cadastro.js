import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from './FirebaseConn';

class Cadastro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nome:'',
            email:'',
            senha:'',
            uid:0
        };

        firebase.auth().signOut();

        this.cadastrar = this.cadastrar.bind(this);
    }

    cadastrar() {
        if (this.state.nome  != '' &&
            this.state.email != '' &&
            this.state.senha != '') {

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    let uid = user.uid;

                    firebase.database().ref('users').child(uid).set({
                        nome:this.state.nome,
                        saldo:0.00
                    });

                    this.props.navigation.navigate('Caixa');
                }
            });

            firebase.auth().createUserWithEmailAndPassword(
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
                    Nome
                </Text>
                <TextInput style={styles.input} autoFocus={true} onChangeText={(nome) => this.setState({nome})} />
                <Text style={styles.texto}>
                    E-mail
                </Text>
                <TextInput style={styles.input} onChangeText={(email) => this.setState({email})} />
                <Text style={styles.texto}>
                    Senha
                </Text>
                <TextInput secureTextEntry={true} style={styles.input} onChangeText={(senha) => this.setState({senha})} />
                <Button title="Cadastrar" onPress={this.cadastrar} />
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


export default Cadastro;