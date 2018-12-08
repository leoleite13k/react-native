import React, {Component} from 'react';
import {View, StyleSheet, Platform, FlatList, Text, Image, TouchableOpacity} from 'react-native';

class HomeLista extends Component{
    constructor(props){
        super(props);
        this.state = {
            lista:[
                {
                    key:1,
                    titulo:"Prato Executivo",
                    img:require('../assets/images/tipos/pe.png'),
                    descricao:"Pratos Executivos Tabelado",
                    bg:'#E35339',
                    products:[
                        {key:1, name:"Prato de Frango",  img:require('../assets/images/cardapio/pe/executivos_frang_.png')},
                        {key:2, name:"Prato de Peixe",   img:require('../assets/images/cardapio/pe/executivos_peix_.png')},
                        {key:3, name:"Prato de Picanha", img:require('../assets/images/cardapio/pe/executivos_picanh_.png')},
                    ]
                },
                {
                    key:2,
                    titulo:"Saladas",
                    img:require('../assets/images/tipos/saladas.png'),
                    descricao:"Pratos de Salada",
                    bg:'#A6BB24',
                    products:[
                        {key:1, name:"Salada de Frango", img:require('../assets/images/cardapio/saladas/salada-fr.png')},
                        {key:2, name:"Salada Água Doce", img:require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {key:3, name:"Salada de Salmão", img:require('../assets/images/cardapio/saladas/salada_salma.png')},
                    ]
                },
                {
                    key:3,
                    titulo:"Bebidas",
                    img:require('../assets/images/tipos/bebidas.png'),
                    descricao:"Tipos de Bebidas",
                    bg:'#079ED4',
                    products:[
                        {key:1, name:"Caipirosca",   img:require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {key:2, name:"Cookie Cream", img:require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {key:3, name:"Morango GD",   img:require('../assets/images/cardapio/bebidas/morango_gd.png')},
                        {key:4, name:"Patra",        img:require('../assets/images/cardapio/bebidas/patra.png')},
                        {key:5, name:"Suco Fitnnes", img:require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                    ]
                },
                {
                    key:4,
                    titulo:"Sobremesas",
                    img:require('../assets/images/tipos/sobremesa.png'),
                    descricao:"Tipos de Sobremesas",
                    bg:'#FCB81C',
                    products:[
                        {key:1, name:"Brownie",         img:require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {key:2, name:"Creme de Papaya", img:require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {key:3, name:"Delicia Gelada",  img:require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
                    ]
                },
            ]
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    renderItem={({item}) => <Lista data={item}/>}
                    data={this.state.lista}
                />
            </View>
        );
    }
}

class Lista extends Component{
    constructor(props){
        super(props);
        this.state = {
        }

        this.clicou = this.clicou.bind(this);
    }

    clicou(){

    }

    render() {
        return(
            <TouchableOpacity underlayColor="#CCCCCC" onPress={this.clicou}>
                <View style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.listaImagem} />
                    <View>
                        <Text style={styles.listaTitulo}>{this.props.data.titulo}</Text>
                        <Text style={styles.listaDescricao}>{this.props.data.descricao}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    listaItem:{
        height: 100,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listaImagem:{
        height:64,
        width: 64,
        marginRight: 20
    },
    listaTitulo:{
        color: '#FFFFFF',
        fontSize: 25,
        fontWeight: 'bold'
    },
    listaDescricao:{
        color: '#FFFFFF',
        fontSize: 16
    }
});

export default HomeLista;