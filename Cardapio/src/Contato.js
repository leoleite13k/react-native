import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

class Contato extends Component{
    render() {
        const telefone = "(019) 3652-2451";
        return (
            <View style={styles.container}>
                <View style={styles.descricao}>
                    <Text style={styles.titulo}>Restaurante: </Text>
                    <Text>Patrao</Text>
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.titulo}>Endereco: </Text>
                    <Text>Rua Patrao de Andradas, N 1452 Avenida 10 e 12</Text>
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.titulo}>Telefone: </Text>
                    <TouchableOpacity onPress={() => alert(telefone) }>
                        <Text style={styles.telefone}>{telefone}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.descricao}>
                    <Text style={styles.titulo}>Email: </Text>
                    <Text>leonardotleite13k@gmail.com</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        fontSize: 17,

    },
    titulo:{
        fontWeight: 'bold'
    },
    descricao:{
        flexDirection: 'row',
        marginTop: 15,
        marginRight: 30,
        marginLeft: 30
    },
    telefone:{
        color:'#0000FF'
    }
});

export default Contato;