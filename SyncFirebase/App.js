import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, TextInput, Button, FlatList } from 'react-native';
import firebase from './src/FirebaseConn';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import Lista from './src/Lista';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

class SyncFirebase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email:'',
            password:'',
            avatar:null,
            name:'',
            uid:0,
            lista:[],
            porcent:'',
        };

        this.register     = this.register.bind(this);
        this.uploadAvatar = this.uploadAvatar.bind(this);
        this.insertAvatar = this.insertAvatar.bind(this);
        this.insertInfo   = this.insertInfo.bind(this);

        firebase.auth().signOut();

        firebase.database().ref('users').on('value', (snapshot) => {
            let state   = this.state;
            state.lista = [];

            snapshot.forEach((child) => {
                state.lista.push({
                    key:child.key,
                    name:child.val().name,
                    email:child.val().email
                });
            });

            this.setState(state);
        });
    }

    register() {
        if (this.state.email != '' && 
            this.state.password != '' && 
            this.state.avatar != null && 
            this.state.name != '') {

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    let state = this.state;
                    state.uid = user.uid;
                    this.setState(state);

                    this.insertAvatar();
                }
            });

            firebase.auth().createUserWithEmailAndPassword(
                this.state.email, 
                this.state.password)
            .catch((error) => {
                alert(error.code);
            });
        }
    }

    insertInfo() {
        if (this.state.uid != 0) {
            firebase.database().ref('users').child(this.state.uid).set({
                name:this.state.name,
                email:this.state.email
            });

            let state = this.state;
            state.email    ='';
            state.password ='';
            state.avatar   = null;
            state.name     = '';
            state.porcent  = '';
            state.uid      = 0;
            this.setState(state);

            firebase.auth().signOut();

            alert("Usuário inserido com sucesso !");
        }
    }

    uploadAvatar() {
        ImagePicker.showImagePicker(null, (url) =>{
            if (url.uri) {
                let state = this.state;
                state.avatar = {uri:url.uri};
                this.setState(state); 
            }
        });
    }

    insertAvatar() {
        let uri = this.state.avatar.uri.replace('file://', '');
        let avatar = firebase.storage().ref().child('avatar').child(this.state.uid+'.jpg');
        let mime = 'image/jpeg';

        RNFetchBlob.fs.readFile(uri, 'base64')
        .then((data) =>{
            return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'})
        })
        .then ((blob) =>{
            avatar.put(blob, {contentType:mime})
            .on('state_changed', (snapshot) => {
                let pct = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                let state = this.state;
                state.porcent = pct+'%';
                this.setState(state);
            },
            (error) => {
                alert(error.code);
            },
            () => {
                this.insertInfo();
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cadastro}>
                    <Text style={styles.texto}>
                        Cadastre um novo Usuário
                    </Text>
                    <View style={styles.formulario}>
                        <View style={styles.imagem}>
                            <Image
                                style={styles.avatar}
                                source={this.state.avatar}
                            />
                            <Button title="Adicionar" onPress={this.uploadAvatar} />
                            <Text style={styles.texto}>
                                {this.state.porcent}
                            </Text>
                        </View>              
                        <View style={styles.info}>
                            <TextInput style={styles.input} placeholder="Digite o nome" value={this.state.name} onChangeText={(name) => this.setState({name})}/>
                            <TextInput style={styles.input} placeholder="Digite o email" value={this.state.email} onChangeText={(email) => this.setState({email})}/>
                            <TextInput style={styles.input} secureTextEntry={true} placeholder="Digite a password" value={this.state.password} onChangeText={(password) => this.setState({password})}/>
                        </View>        
                    </View>
                    <Button title="Cadastrar" onPress={this.register} />
                </View>
                <View style={styles.lista}>
                    <FlatList 
                        data={this.state.lista}
                        renderItem={({item}) => <Lista data={item} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS == 'ios'? 30 : 0,
    },
    cadastro:{
        backgroundColor: '#EEEEEE',
        margin: 10,
        padding: 10,
        height: 240,
        borderRadius: 10,
    },
    formulario:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
    },
    avatar:{
        width: 100,
        height: 100,
        backgroundColor: '#CCCCCC',
        borderRadius: 50,
    },
    info:{
        flex: 1,
        flexDirection: 'column',
    },
    input:{
        height: 40,
        borderWidth: 1,
        borderColor: '#000000',
        borderStyle: 'solid',
        margin: 5,
        padding: 10,
    },
    lista:{
        flex: 1,
        backgroundColor: '#EEEEEE',
        margin: 10,
        borderRadius: 10,
    }
});


export default SyncFirebase;