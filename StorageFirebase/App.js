import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image, Button } from 'react-native';
import firebase from './src/FirebaseConn';


class StorageFirebase extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            avatar:null
        };

        firebase.storage().ref().child('images/imagem.jpg').getDownloadURL()
        .then((url) => {
            this.setState({avatar:{uri:url}});
        }).catch(() => {
            this.setState({avatar:null});
        });

        this.remover = this.remover.bind(this);
    }

    remover() {
        firebase.storage().ref().child('images/imagem.jpg').delete()
        .then(() => {
            this.setState({avatar:null});
        }).catch((error) => {
            alert(error.code);
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={this.state.avatar}
                />
                <Button title="Remover Avatar" onPress={this.remover} />
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: Platform.OS == 'ios'? 40 : 0,
        alignItems: 'center',
    },
    avatar:{
        width: 100,
        height: 100,
    }
});


export default StorageFirebase;