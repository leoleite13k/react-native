import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, FlatList } from 'react-native';
import firebase from './src/FirebaseConn';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            lista:[]
        };

        //Ordenando dados
        //orderByKey()
        //orderByValue()
        //orderByChild('child')

        //Filtrando os Dados
        //Usar em conjunto com o orderBy
        //Adicionar a regra no firebase campo:{"indexOn": ".value"}
        //startAt(100) Inicia em 100 (de 100 para cima)
        //endAt(1000) Somente Itens abaxo 1000
        //equalTo("item") Filtra somente o que foi igual a o item sempre entre o valor do item ""
        //

        firebase.database().ref('usuarios').orderByChild('idade').startAt(30)
        .on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];

            snapshot.forEach((childItem) => {
                state.lista.push({
                    key:childItem.key,
                    nome:childItem.val().nome,
                    idade:childItem.val().idade
                });
            });

            this.setState(state);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.item}
                    data={this.state.lista}
                    renderItem={({item}) => {
                        return(
                            <Text style={styles.texto}>
                                -> {item.key+' - '+item.nome+' '+item.idade+' anos'}
                            </Text>
                        );
                    }}
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
    texto:{
        textAlign: 'center',
    }
});


export default App;