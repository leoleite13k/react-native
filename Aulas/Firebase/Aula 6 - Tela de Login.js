import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase';

class AuthFirebase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email:'',
            senha:''
        };

        this.logar = this.logar.bind(this);

        var config = {
            apiKey: "AIzaSyC-6lkzPWBUVlZtzIQ6GhFacKZ57stT8o0",
            authDomain: "projeto-teste-b38a7.firebaseapp.com",
            databaseURL: "https://projeto-teste-b38a7.firebaseio.com",
            projectId: "projeto-teste-b38a7",
            storageBucket: "projeto-teste-b38a7.appspot.com",
            messagingSenderId: "753623237460"
        };
        firebase.initializeApp(config);

        firebase.auth().signOut();

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('usuario').child(user.uid).once('value')
                .then((snapshot) => {
                    let nome = snapshot.val().nome;

                    alert("Seja Bem Vindo(a), "+nome);
                });
            }
        });
    }

    logar() {
        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) =>{
            alert(erro.code);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Tela de Login</Text>
                <Text style={styles.texto}>Email:</Text>
                <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />
                <Text style={styles.texto}>Senha:</Text>
                <TextInput secureTextEntry={true} onChangeText={(senha) => this.setState({senha})} style={styles.input} />
                <Button title="Login" onPress={this.logar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS == 'ios'? 30 : 0,
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
    },
    texto:{
        marginLeft: 10,
        marginTop: 10,
    },
    titulo:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
});


export default AuthFirebase;