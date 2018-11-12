import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Image,
  TouchableHighlight,
  Text,
} from 'react-native';

class ListItem extends Component {
    constructor(props) {
      super(props);

      this.state = {
        msg:props.data.msg
      };

      this.click = this.click.bind(this);
    }

    click() {

    }

    render() {
        return(
            <TouchableHighlight onPress={this.click} underlayColor='#CCCCCC' >
                <View style={styles.item}>
                    <Image source={{uri:this.props.data.img}} style={styles.img}/>
                    <View>
                        <Text numberOfLines={1} style={styles.nome}>{this.props.data.nome}</Text>
                        <Text numberOfLines={1} style={styles.msg}>{this.state.msg}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        flex:1,
        flexDirection:'row',
        height: 60,
        paddingTop: 10,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderStyle: 'solid',
    },
    img:{
        height: 40,
        width: 40,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 20,
    },
    nome:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    msg:{

    }

});


export default ListItem;