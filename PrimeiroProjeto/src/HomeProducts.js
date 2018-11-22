import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

class HomeProducts extends Component {
    static navigationOptions = {
        title:'Produtos',
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
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon:{
        height:26,
        width:26,
    },
});

export default HomeProducts;