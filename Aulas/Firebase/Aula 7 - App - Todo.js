import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';
import firebase from 'firebase';

import Lista from './src/Lista';

class AuthFirebase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            uid:'',
            email:'',
            senha:'',
            titulo:'',
            lista:[]
        };

        this.logar = this.logar.bind(this);
        this.adicionar = this.adicionar.bind(this);

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
                let state  = this.state;
                state.uid = user.uid;
                this.setState(state);


                firebase.database().ref('usuario').child(user.uid).once('value')
                .then((snapshot) => {
                    let nome = snapshot.val().nome;
                    alert("Seja Bem Vindo(a), "+nome);
                });

                firebase.database().ref('todo').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.lista =[];

                    snapshot.forEach((childItem) => {
                        state.lista.push({
                            titulo:childItem.val().titulo,
                            key:childItem.key
                        });
                    });

                    this.setState(state);
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

    adicionar() {
        if (this.state.uid != '' && this.state.titulo != '') {
            let todo = firebase.database().ref('todo').child(this.state.uid);
            let chave = todo.push().key;

            alert(this.state.titulo);

            todo.child(chave).set({
                titulo:this.state.titulo
            });
        }
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
                <View style={styles.adicionar}>
                    <Text style={styles.titulo}>Adicionar a Lista </Text>
                    <TextInput value={this.state.titulo} onChangeText={(titulo) => this.setState({titulo})} style={styles.input} />
                    <Button title="Adicionar" onPress={this.adicionar} />
                </View>
                <FlatList 
                    data={this.state.lista}
                    renderItem={({item}) => <Lista data={item} /> }
                />
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
    },
    adicionar:{
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        padding: 5,
        margin: 10,
        marginTop: 50,
    }
});


export default AuthFirebase;