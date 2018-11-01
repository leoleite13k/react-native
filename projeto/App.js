import React, { Component } from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import { StackNavigator } from 'react-navigation';

class Tela1 extends Component {
    static navigationOptions = {
        title:"Tela 1"
    }

    render() {
        return(
            <View>
                <Text>Pagina Main</Text>
                <Button title="Ir para Tela 2" onPress={() => this.props.navigation.navigate('Tela2')} />
            </View>
        );
    }
}

class Tela2 extends Component {
    static navigationOptions = {
        title:"Tela 2"
    }   

    render() {
        return (
            <View>
                <Text>Pagina 2</Text>
                <Button title="Voltar" onPress={() => this.props.navigation.goBack()} />
            </View>    
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
});