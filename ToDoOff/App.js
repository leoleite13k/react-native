import React, {Component} from 'react';
import {Platform, StyleSheet, FlatList, View, Button, Text, TextInput, NetInfo, AsyncStorage} from 'react-native';

import ListaItem from './src/ListaItem';

class ToDoOff extends Component{

    constructor(props) {
        super(props)
  
        this.state = {
           lista:[],
           input:'',
           status:0
        };

        this.url = 'https://b7web.com.br/todo/42272';

        this.loadLista = this.loadLista.bind(this);
        this.addButton = this.addButton.bind(this);
        this.conEvent = this.conEvent.bind(this);
        this.sync = this.sync.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);

        NetInfo.addEventListener('connectionChange', this.conEvent);
    }

    conEvent(info) {
        let state = this.state;

        if (info.type == 'none') {
            state.status = 0;
        } else {
            state.status = 1;
        }

        this.setState(state);

        if (state.lista.length == 0) {
            this.loadLista();
        }
    }

    loadLista() {
        if (this.state.status == 1) {
            fetch(this.url)
                .then((retorno) => retorno.json())
                .then((json) => {
                    let state = this.state;
                    state.lista = json.todo;
                    this.setState(state);

                    let lista = JSON.stringify(json.todo);
                    AsyncStorage.setItem('lista', lista);
                });
        } else {
            AsyncStorage.getItem('lista')
            .then((item) => {
                let state = this.state;

                if (item != '') {
                    let listaJSON = JSON.parse(item);
                    state.lista = listaJSON;
                }

                this.setState(state);
            });
        }
    }

    addButton() {
        AsyncStorage.getItem('lista')
            .then((item) => {
                let state = this.state;

                let listaJSON = JSON.parse(item);
                listaJSON.push({
                    item:this.state.input,
                    done:'0',
                    id:0
                });

                state.lista = listaJSON;

                let listaStr = JSON.stringify(listaJSON);
                AsyncStorage.setItem('lista', listaStr);

                state.input = '';
                this.setState(state);
            });
    }

    sync() {
        if (this.state.status == 1) {
            AsyncStorage.getItem('lista')
                .then((item) => {
                    fetch(this.url+'/sync', {
                        method:'POST',
                        headers:{
                            'Accept':'application/json',
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify({
                            json:item
                        })
                    })
                    .then((retorno) => retorno.json())
                    .then((json) => {
                        if(json.todo.status) {
                            alert("Itens sincronizados com sucesso !");
                        } else {
                            alert("Falhou, Tente mais tarde !");
                        }
                    });
                });    
        } else {
            alert("Sem conexão !");
        }          
    }

    update(id, done) {
        AsyncStorage.getItem('lista')
            .then((item) => {
                let state = this.state;
                let listaJSON = JSON.parse(item);

                for (var i in listaJSON) {
                    if (listaJSON[i].id == id) {
                        if (done == 'sim') {
                            listaJSON[i].done = '1';
                        } else {
                            listaJSON[i].done = '0';
                        }

                    }
                }

                state.lista = listaJSON;

                let listaStr = JSON.stringify(listaJSON);
                AsyncStorage.setItem('lista', listaStr);

                this.setState(state);
            });
    }

    delete(id) {   
        AsyncStorage.getItem('lista')
            .then((item) => {
                let state = this.state;

                let listaJSON = JSON.parse(item);
                for (var i in listaJSON) {
                    if (listaJSON[i].id == id) {
                        listaJSON.splice(i, 1);
                    }
                }

                state.lista = listaJSON;

                let listaStr = JSON.stringify(listaJSON);
                AsyncStorage.setItem('lista', listaStr);

                state.input = '';
                this.setState(state);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.addArea}>
                    <Text style={styles.addTxt}>
                        Acione uma nova tarefa
                    </Text>
                    <TextInput style={styles.input} onChangeText={(text) => {
                            let state = this.state;
                            state.input = text;
                            this.setState(state);
                        }} value={this.state.input} />
                    <Button title="Adicionar" onPress={this.addButton}/>
                </View>
                <FlatList 
                    data={this.state.lista}
                    renderItem={({item}) => <ListaItem data={item} url={this.url} loadFunction={this.loadLista} onDelete={this.delete} onUpdate={this.update} />}
                    keyExtractor={(item, index) => item.id}
                />
                <View style={styles.areaStatus}>
                    <Text style={styles.status}>
                        {this.state.status}
                    </Text>
                </View>
                <View style={styles.areaStatus}>
                    <Button title="Sincronizar" onPress={this.sync}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS == 'ios' ? 30 : 0
    },
        addArea:{
        backgroundColor: '#DDDDDD',
        height: 120
    },
        input:{
        height: 40,
        backgroundColor: '#CCCCCC',
        marginLeft: 20,
        marginRight: 20,
        paddingLeft: 10,
        paddingRight: 10
    },
    addTxt:{
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    areaStatus:{
        height: 50,
        backgroundColor: '#EEEEEE',
    },
    status:{
        fontSize: 20,
        textAlign: 'center',
    }
});

export default ToDoOff;