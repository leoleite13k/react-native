import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList, Button } from 'react-native';
import firebase from './FirebaseConn';
import Historico from './Historico';

class Caixa extends Component {
    constructor(props) {
        super(props);

        this.state = {
            saldo:0,
            historico:[],
        };

        this.addReceita = this.addReceita.bind(this);
        this.addDespesa = this.addDespesa.bind(this);
        this.sair       = this.sair.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.saldo = snapshot.val().saldo;
                    this.setState(state);
                });

                firebase.database().ref('historico').child(user.uid).on('value', (snapshot) => {
                    let state = this.state;
                    state.historico = [];

                    snapshot.forEach((childItem) => {
                        state.historico.push({
                            key:childItem.key,
                            tipo:childItem.val().tipo,
                            valor:childItem.val().valor,
                            data:childItem.val().data
                        });
                    });

                    this.setState(state);
                });

            } else {
                this.props.navigation.navigate('Home');
            }
        });
    }

    addReceita() {
        this.props.navigation.navigate('AddReceita');
    }

    addDespesa() {
        this.props.navigation.navigate('AddDespesa');
    }

    sair() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.saldo}>
                    <Text style={[styles.tSaldo,{color: this.state.saldo > 0 ? '#13C300' : '#C3002D' }]}>
                        Saldo R$ {this.state.saldo}
                    </Text>
                </View>
                <FlatList
                    style={styles.historico}
                    data={this.state.historico}
                    renderItem={({item}) => <Historico data={item} />}
                />
                <View style={styles.bHistorico}>
                    <Button title="+ Receita" onPress={this.addReceita} />
                    <Button title="+ Despesa" onPress={this.addDespesa} />
                    <Button title="Sair" onPress={this.sair} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    saldo:{
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#999999',
    },
    tSaldo:{
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 5,
    },
    historico:{
        flex: 1,
    },
    bHistorico:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 10,
        paddingBottom: 20,
        backgroundColor: '#DDDDDD',
    }
});


export default Caixa;