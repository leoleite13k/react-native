import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';

class Horarios extends Component {
    static navigationOptions = {
        tabBarLabel:'Horarios',
        tabBarIcon:({focused,tintColor}) => {
            if (focused) {
                return (
                    <Image source={require('../assets/images/horario_azul.png')} style={styles.icon} />
                );
            } else {
                return (
                    <Image source={require('../assets/images/horario_preto.png')} style={styles.icon}/>
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

export default Horarios;