import React, {Component} from 'react';
import {View, Image, StyleSheet, FlatList, Text} from 'react-native';

class HomeProduto extends Component{

    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('titulo', 'Produto'),
        };
    };

    constructor(props){
        super(props);
        this.state= {
            lista: props.navigation.state.params.produtos
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.lista}
                    renderItem={({item}) => <ProdutoItem data={item}/>}
                />
            </View>
        );
    }
}

class ProdutoItem extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return(
            <View style={styles.produtoItem}>
                <Image resizeMode='contain' source={this.props.data.img} style={styles.produtoImagem} />
                <Text style={styles.produtoNome}>{this.props.data.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#CCCCCC'
    },
    produtoItem:{
        height: 100,
        backgroundColor: '#FFFFFF',
        margin: 10,
        borderRadius: 5,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    produtoImagem:{
        width: 150,
        height: 80
    },
    produtoNome:{
        fontSize: 16
    }
});

export default HomeProduto;