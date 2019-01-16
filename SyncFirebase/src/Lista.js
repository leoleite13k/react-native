import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Image } from 'react-native';
import firebase from './FirebaseConn';

class Lista extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            key:this.props.data.key,
            name:this.props.data.name,
            email:this.props.data.email,
            avatar:null   
        };

        firebase.storage().ref().child('avatar/'+this.state.key+'.jpg').getDownloadURL()
        .then((url) => {
            let state    = this.state;
            state.avatar = {uri:url};
            this.setState(state);
        })
        .catch((error) => {
            alert(error.code);
        });
    }

    render() {
        return (
            <View style={styles.usuarios}>
                <Image
                    style={styles.itemAvatar}
                    source={this.state.avatar}
                />
                <View style={styles.itemUsuario}>
                    <Text style={styles.nome}>
                        {this.state.name}
                    </Text>
                    <Text style={styles.email}>
                        {this.state.email}
                    </Text>
                </View>
            </View>        
        );
    }
}

const styles = StyleSheet.create({
    usuarios:{
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemAvatar:{
        height: 80,
        width: 80,
        margin: 10,
        borderRadius: 40,
    },
    itemUsuario:{
        flex: 1,
        flexDirection: 'column',
    },
    nome:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    email:{
        fontWeight: '100',
        marginTop: 2,
    }
});


export default Lista;