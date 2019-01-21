import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Button } from 'react-native';
import firebase from './FirebaseConn';

class AddReceita extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valor:''
        };

        this.adicionar = this.adicionar.bind(this);
        this.dataAtual = this.dataAtual.bind(this);
    }

    adicionar() {
        if (this.state.valor != '') {
            //Adicionado no Historico
            let uid = firebase.auth().currentUser.uid;
            let historico = firebase.database().ref('historico').child(uid);
            let key = historico.push().key;

            historico.child(key).set({
                tipo:'receita',
                valor:parseFloat(this.state.valor),
                data:this.dataAtual(),
            });

            //Alterando o Saldo
            let user = firebase.database().ref('users').child(uid);

            user.once('value', (snapshot) => {
                let saldo = parseFloat(snapshot.val().saldo);
                saldo += parseFloat(this.state.valor);

                user.child('saldo').set(saldo.toFixed(2));
            });

            this.props.navigation.goBack();
        }

    }

    dataAtual() {
        let data  = new Date();
        return data.getDate()+"/"+data.getMonth()+"/"+data.getFullYear()+" "+data.getHours()+":"+data.getMinutes()+":"+data.getSeconds();
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.tReceita}>
                    Adicionar valor de Receita
                </Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    placeholder="0.00"
                    onChangeText={(valor) => this.setState({valor})}
                    autoFocus={true}
                />
                <Button title="Adicionar" onPress={this.adicionar}/>
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
    tReceita:{
        fontSize: 20,
        fontWeight: '200',
    },
    input:{
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderStyle: 'solid',
        width: 300,
        height: 60,
        margin: 10,
        padding: 10,
        textAlign: 'center',
        fontSize: 25,
    },
});

export default AddReceita;