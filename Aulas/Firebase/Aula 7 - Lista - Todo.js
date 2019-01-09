import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native';


class Lista extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.apagar = this.apagar.bind(this);        
    }

    apagar() {         
        /*
        let todo = firebase.database().ref('todo').child(this.props.data.uid);
        let chave = todo.child(this.props.data.key);

        todo.child(chave).remove();
        */
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.data.titulo}</Text>
                <TouchableHighlight underlayColor='#CCCCCC' style={styles.botaoApagar} onPress={this.apagar}>
                    <View style={styles.AreaApagar}>
                        <Text style={styles.apagar}>-</Text>
                    </View>
                </TouchableHighlight>  
            </View>         
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    botaoApagar:{
        backgroundColor:'#FF0000',
        borderRadius: 50,
        height: 30,
        width: 30,
    },
    AreaApagar:{
        alignItems: 'center',
    },
    apagar:{
        color:'#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
    }
});


export default Lista;