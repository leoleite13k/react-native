import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class Historico extends Component {
    constructor(props) {
        super(props);

        let bg = '#62B074';

        if (this.props.data.tipo == 'despesa') {
            bg = '#EE6B6B';
        }

        this.state = {
            bg:bg,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => {}}
                    style={styles.areaHistorico}
                    underlayColor='#CCCCCC'>
                        <View style={[styles.historico, {backgroundColor: this.state.bg,}]}>
                            <View style={styles.info}>
                                <Text style={styles.titulo}>
                                    Tipo:
                                </Text>
                                <Text style={styles.item}>
                                    {this.props.data.tipo}
                                </Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.titulo}>
                                    Valor:
                                </Text>
                                <Text style={styles.item}>
                                    R${this.props.data.valor}
                                </Text>
                            </View>
                            <View style={styles.info}>
                                <Text style={styles.titulo}>
                                    Data:
                                </Text>
                                <Text style={[styles.item, {fontSize: 12, fontWeight: '200'}]}>
                                    {this.props.data.data}
                                </Text>
                            </View>
                        </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    areaHistorico:{
        borderWidth: 1,
        borderColor: '#EEEEEE',
        borderStyle: 'solid',
    },
    historico:{
        padding: 10,
    },
    info:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    titulo:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    item:{
        fontSize: 15,
        marginLeft: 2,
        marginTop: 2,
    },
});


export default Historico;