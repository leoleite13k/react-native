import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from './FirebaseConn';

class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email:'',
            senha:''
        };

        this.logar = this.logar.bind(this);

        firebase.auth().signOut();
    }

    logar() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // Passando antes de abrir o Home
                // Sempre legal pegar coisas que afzem parte da interface !!!
                /*
                firebase.database().ref('usuario').child(user.uid).once('value')
                .then((snapshot) => {
                    this.props.navigation.navigate('Home', {
                        nome:snapshot.val().nome
                    });
                });
                */

                //Passando depois no Home
                // SOmente passar assim se for carregar algo na outra Tela (Lista...)
                this.props.navigation.navigate('Home');
            }
        });

        firebase.auth().signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        ).catch((error) =>{
            alert(error.code);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    Email:
                </Text>
                <TextInput onChangeText={(email) => this.setState({email})} style={styles.input} />

                <Text style={styles.texto}>
                    Senha:
                </Text>
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


export default Login;