import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableHighlight} from 'react-native'

export class ListaItem extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            done:(this.props.data.done == '1') ? styles.done : styles.undone
        };
        
        this.marcar  = this.marcar.bind(this);
        this.deletar = this.deletar.bind(this);
    }

    marcar() {
        let state = this.state;
        let done = 'sim';

        if (this.state.done == styles.undone) {
            state.done = styles.done;
            done = 'sim';
        } else {
            state.done = styles.undone;
            done = 'nao';
        }

        this.setState(state);
        this.props.onUpdate(this.props.data.id, done);
    }

    deletar() {
        this.props.onDelete(this.props.data.id);
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight underlayColor='#CCCCCC' style={[styles.marcarArea, this.state.done]} onPress={this.marcar}>
                    <View>

                    </View>
                </TouchableHighlight>
                <Text>{this.props.data.item}</Text>
                <View style={styles.btDeletar}>
                    <TouchableHighlight underlayColor='#CCCCCC' style={styles.deletar} onPress={this.deletar}>
                        <Text style={styles.txtDeletar}>DELETAR</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'row',
        paddingTop: 10,
        paddingBottom: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
        alignItems: 'center',
    },
    marcarArea:{
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 100,
    },
    undone:{
        backgroundColor: '#CCCCCC',
    },
    done:{
        backgroundColor: '#00FF00',
    },
    deletar:{
        justifyContent: 'center',
        width: 100,
        height: 40,
        borderWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
        backgroundColor:'#FF0000',
        borderRadius: 10,
    },
    txtDeletar:{
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FFFFFF',
    },
    btDeletar:{
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10,
    }
})


export default ListaItem