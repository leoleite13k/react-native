import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

class Sobre extends Component {
    static navigationOptions = {
        tabBarLabel:'Sobre',
        tabBarIcon:({focused,tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('../assets/images/sobre_azul.png')} style={styles.icon} />
                );
            } else {
                return (
                    <Image source={require('../assets/images/sobre_preto.png')} style={styles.icon}/>
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

export default Sobre;