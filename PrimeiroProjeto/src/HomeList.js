import React, {Component} from 'react';
import {View, StyleSheet, Image, FlatList, Platform, Text, TouchableHighlight} from 'react-native';

class HomeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    key:1,
                    title: 'Prato Executivo',
                    img: require('../assets/images/tipos/pe.png'),
                    description: 'Partos Executivos prontos',
                    bg:'#e35339',
                    product: [
                        {name: 'Parto de Frango', img: require('../assets/images/cardapio/pe/executivos_frang_.png')},
                        {name: 'Parto de Frango', img: require('../assets/images/cardapio/pe/executivos_peix_.png')},
                        {name: 'Parto de Frango', img: require('../assets/images/cardapio/pe/executivos_picanh_.png')},
                    ]
                },
                {
                    key:2,
                    title: 'Saladas',
                    img: require('../assets/images/tipos/saladas.png'),
                    description: 'Pratos de Saladas',
                    bg:'#a6bb24',
                    product: [
                        {name: 'Salada de Frango', img: require('../assets/images/cardapio/saladas/salada-fr.png')},
                        {name: 'Salada Água Doce', img: require('../assets/images/cardapio/saladas/salada_aguadoc_.png')},
                        {name: 'Salada de Salmão', img: require('../assets/images/cardapio/saladas/salada_salma.png')},
                    ]

                },
                {
                    key:3,
                    title: 'Bebidas',
                    img: require('../assets/images/tipos/bebidas.png'),
                    description: 'Bebidas',
                    bg:'#079ed4',
                    product: [
                        {name: 'Caipirosca', img: require('../assets/images/cardapio/bebidas/capirosc_3.png')},
                        {name: 'Cookie Cream', img: require('../assets/images/cardapio/bebidas/cookies_crea.png')},
                        {name: 'Morango GD', img: require('../assets/images/cardapio/bebidas/morango_gd.png')},
                        {name: 'Patra', img: require('../assets/images/cardapio/bebidas/patra.png')},
                        {name: 'Suco Fitness', img: require('../assets/images/cardapio/bebidas/suco_fitines_gd.png')},
                    ]

                },
                {
                    key:4,
                    title: 'Sobremesas',
                    img: require('../assets/images/tipos/sobremesa.png'),
                    description: 'Sobremesas Deliciosas',
                    bg:'#fcb81c',
                    product: [
                        {name: 'Brownie', img: require('../assets/images/cardapio/sobremesas/brownie_gd.png')},
                        {name: 'Creme Papaya', img: require('../assets/images/cardapio/sobremesas/creme_papaya_cassis_gd.png')},
                        {name: 'Delicia Gelada', img: require('../assets/images/cardapio/sobremesas/delicia_gelada_gd.png')},
                    ]

                },
            ],
        }
    }

    static navigationOptions = {
        title:'Restaurante',
        tabBarLabel:'Contato',
        tabBarIcon:({focused,tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('../assets/images/home_azul.png')} style={styles.icon} />
                );
            } else {
                return (
                    <Image source={require('../assets/images/home_preto.png')} style={styles.icon}/>
                );
            }
        }
    }

    render () {
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({item}) => <Lista data={item} />}
                />
            </View>
        );
    }
}

class Lista extends Component {

    constructor(props) {
        super(props);
        this.state={
        }

        this.clicou = this.clicou.bind(this);
    }

    clicou() {

    }

    render() {
        return(
            <TouchableHighlight underlayColor='#CCCCCC' onPress={this.clicou}>
                <View style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
                    <Image source={this.props.data.img} style={styles.listaImagem} />
                    <View>
                        <Text style={styles.listaTitle}>{this.props.data.title}</Text>
                        <Text style={styles.listaDescription}>{this.props.data.description}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
    icon:{
        height:26,
        width:26,
    },
    container:{
        flex:1,
        marginTop: (Platform.OS == 'ios') ? 20 : 0,
    },
    listaItem:{
        height: 100,
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    listaImagem:{
        width:64,
        height:64,
        marginLeft: 20,
        marginRight: 20,
    },
    listaTitle:{
        color:'#FFFFFF',
        fontSize:25,
        fontWeight: 'bold',
    },
    listaDescription:{
        color:'#FFFFFF',
        fontSize:16
    },
});

export default HomeList;