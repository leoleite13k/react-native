import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Button, Image } from 'react-native';
import firebase from './src/FirebaseConn';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';

window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;

class StorageFirebase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            foto:null
        };

        this.pegarFoto = this.pegarFoto.bind(this);

        /*
        //Formas de pegar arquivos
        firebase.storage().ref().child('images').child('imagem.jpg');
        firebase.storage().ref().child('images/imagem.jpg');

        //Entrando e voltando de pastas
        let images = firebase.storage().ref().child('assets').child('images');

        //Voltando uma pasta
        let arquivos = images.parent.child('files');
        
        //Raiz /
        let raiz = images.root;
        firebase.storage().ref();
        */
    }

    pegarFoto() {
        //launchImageLibrary Abre as foto
        //launchCamera Abre a camera
        //showImagePicker para selecionar qual vai usar
        /*
        let options= {
            title:"Selecione uma Foto"
        }
        */

        ImagePicker.launchImageLibrary(null, (r) => {
            if (r.uri) {
                let uri = r.uri.replace('file://', '');
                let imagem = firebase.storage().ref().child('images').child('imagem.jpg');
                let mime = 'image/jpeg';

                RNFetchBlob.fs.readFile(uri, 'base64')
                .then ((data) => {
                    return RNFetchBlob.polyfill.Blob.build(data, {type:mime+';BASE64'});
                })
                .then((blob) => {
                    imagem.put(blob, {contentType:mime})
                    .then(() => {
                        blob.close();
                        
                        alert("Terminou o Upload !");

                        let url = imagem.getDownloadURL();
                    })
                    .catch((error) => {
                        alert(error.code);
                    });
                });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Pegar Foto" onPress={this.pegarFoto} />
                <Image source={this.state.foto} style={styles.foto} /> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS == 'ios'? 30 : 0,
    },
    foto:{
        height: 300,
        width: 300,
    }
});


export default StorageFirebase;