import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import firebase from './FirebaseConn';

class Home extends Component {

    constructor(props) {
      super(props);
    
        this.state = {
            // Passando na Tela de login !
            //nome:this.props.navigation.state.params.nome
            nome:''
        };

        //Pegando depois que entrou no Home !
        if (firebase.auth().currentUser) {
            firebase.database().ref('usuario').child(firebase.auth().currentUser.uid).once('value')
            .then((snapshot) =>{
                let state = this.state;
                state.nome = snapshot.val().nome;
                this.setState(state);
            });
        }

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>
                    Olá, {this.state.nome}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto:{
        fontWeight: 'bold',
        fontSize: 20,
    }
});


export default Home;